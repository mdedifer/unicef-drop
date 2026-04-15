import { supabase } from "./supabase";

// --- Types for Supabase rows ---

export interface ProjectRow {
  id: string;
  team: string;
  problem: string;
  solution: string;
  needs: string;
  image_url: string | null;
  votes: number;
  user_id: string | null;
  created_at: string;
}

export interface DraftRow {
  id: string;
  user_id: string;
  drop_id: string;
  current_step: number;
  team: string;
  empathize: string;
  define: string;
  ideate: string;
  ideate_image_url: string | null;
  prototype: string;
  test: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// --- Projects ---

export async function getProjects(): Promise<ProjectRow[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("votes", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
  return data;
}

export async function saveProject(project: {
  team: string;
  problem: string;
  solution: string;
  needs: string;
  image_url?: string | null;
  user_id: string;
}): Promise<ProjectRow | null> {
  const { data, error } = await supabase
    .from("projects")
    .insert(project)
    .select()
    .single();

  if (error) {
    console.error("Error saving project:", error);
    return null;
  }
  return data;
}

// --- Votes ---

export async function voteProject(projectId: string, userId: string): Promise<boolean> {
  // Insert vote (will fail silently if duplicate due to unique constraint)
  const { error: voteError } = await supabase
    .from("votes")
    .insert({ user_id: userId, project_id: projectId });

  if (voteError) {
    // Duplicate vote
    return false;
  }

  // Increment vote count
  await supabase.rpc("increment_vote", { p_project_id: projectId });
  return true;
}

export async function hasVoted(projectId: string, userId: string): Promise<boolean> {
  const { data } = await supabase
    .from("votes")
    .select("id")
    .eq("user_id", userId)
    .eq("project_id", projectId)
    .maybeSingle();

  return !!data;
}

// --- Drafts ---

export async function getDrafts(userId: string): Promise<DraftRow[]> {
  const { data, error } = await supabase
    .from("drafts")
    .select("*")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Error fetching drafts:", error);
    return [];
  }
  return data;
}

export async function getDraft(draftId: string): Promise<DraftRow | null> {
  const { data, error } = await supabase
    .from("drafts")
    .select("*")
    .eq("id", draftId)
    .single();

  if (error) {
    console.error("Error fetching draft:", error);
    return null;
  }
  return data;
}

export async function createDraft(
  userId: string,
  dropId: string,
  team: string
): Promise<DraftRow | null> {
  const { data, error } = await supabase
    .from("drafts")
    .insert({
      user_id: userId,
      drop_id: dropId,
      team,
    })
    .select()
    .single();

  if (error) {
    console.error("Error creating draft:", error);
    return null;
  }
  return data;
}

export async function updateDraft(
  draftId: string,
  updates: Partial<Omit<DraftRow, "id" | "user_id" | "created_at">>
): Promise<DraftRow | null> {
  const { data, error } = await supabase
    .from("drafts")
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq("id", draftId)
    .select()
    .single();

  if (error) {
    console.error("Error updating draft:", error);
    return null;
  }
  return data;
}

export async function submitDraft(
  draftId: string,
  userId: string
): Promise<ProjectRow | null> {
  const draft = await getDraft(draftId);
  if (!draft) return null;

  // Convert draft → project
  const project = await saveProject({
    team: draft.team,
    problem: `${draft.empathize}\n\n${draft.define}`,
    solution: draft.ideate,
    needs: `${draft.prototype}\n\n${draft.test}`,
    image_url: draft.ideate_image_url,
    user_id: userId,
  });

  if (!project) return null;

  // Mark draft as submitted
  await updateDraft(draftId, { status: "submitted" });

  return project;
}
