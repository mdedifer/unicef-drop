import { Project, Draft, sampleProjects } from "./data";

const PROJECTS_KEY = "drop-projects";
const VOTES_KEY = "drop-votes";
const INITIALIZED_KEY = "drop-initialized";
const DRAFTS_KEY = "drop-drafts";

function initIfNeeded(): void {
  if (typeof window === "undefined") return;
  if (localStorage.getItem(INITIALIZED_KEY)) return;

  localStorage.setItem(PROJECTS_KEY, JSON.stringify(sampleProjects));
  localStorage.setItem(VOTES_KEY, JSON.stringify({}));
  localStorage.setItem(INITIALIZED_KEY, "true");
}

export function getProjects(): Project[] {
  if (typeof window === "undefined") return sampleProjects;
  initIfNeeded();
  const raw = localStorage.getItem(PROJECTS_KEY);
  return raw ? JSON.parse(raw) : sampleProjects;
}

export function saveProject(project: Omit<Project, "id" | "votes" | "createdAt">): Project {
  const projects = getProjects();
  const newProject: Project = {
    ...project,
    id: `project-${Date.now()}`,
    votes: 0,
    createdAt: new Date().toISOString(),
  };
  projects.unshift(newProject);
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  return newProject;
}

export function voteProject(projectId: string): boolean {
  const votes: Record<string, boolean> = JSON.parse(
    localStorage.getItem(VOTES_KEY) || "{}"
  );

  if (votes[projectId]) return false;

  votes[projectId] = true;
  localStorage.setItem(VOTES_KEY, JSON.stringify(votes));

  const projects = getProjects();
  const idx = projects.findIndex((p) => p.id === projectId);
  if (idx !== -1) {
    projects[idx].votes += 1;
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  }
  return true;
}

export function hasVoted(projectId: string): boolean {
  if (typeof window === "undefined") return false;
  const votes: Record<string, boolean> = JSON.parse(
    localStorage.getItem(VOTES_KEY) || "{}"
  );
  return !!votes[projectId];
}

// --- Drafts ---

function getAllDrafts(): Draft[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(DRAFTS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function setAllDrafts(drafts: Draft[]): void {
  localStorage.setItem(DRAFTS_KEY, JSON.stringify(drafts));
}

export function getDrafts(userId: string): Draft[] {
  return getAllDrafts().filter((d) => d.userId === userId);
}

export function getDraft(draftId: string): Draft | null {
  return getAllDrafts().find((d) => d.id === draftId) || null;
}

export function createDraft(userId: string, dropId: string, team: string): Draft {
  const drafts = getAllDrafts();
  const draft: Draft = {
    id: `draft-${Date.now()}`,
    userId,
    dropId,
    currentStep: 0,
    team,
    empathize: "",
    define: "",
    ideate: "",
    prototype: "",
    test: "",
    status: "draft",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  drafts.unshift(draft);
  setAllDrafts(drafts);
  return draft;
}

export function updateDraft(draftId: string, updates: Partial<Draft>): Draft | null {
  const drafts = getAllDrafts();
  const idx = drafts.findIndex((d) => d.id === draftId);
  if (idx === -1) return null;
  drafts[idx] = { ...drafts[idx], ...updates, updatedAt: new Date().toISOString() };
  setAllDrafts(drafts);
  return drafts[idx];
}

export function submitDraft(draftId: string): Project | null {
  const draft = getDraft(draftId);
  if (!draft) return null;

  // Convert draft to project
  const project = saveProject({
    team: draft.team,
    problem: `${draft.empathize}\n\n${draft.define}`,
    solution: draft.ideate,
    needs: `${draft.prototype}\n\n${draft.test}`,
    image: draft.ideateImage,
  });

  // Mark draft as submitted
  updateDraft(draftId, { status: "submitted" });

  return project;
}
