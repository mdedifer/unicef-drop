"use client";

import { useState, useEffect } from "react";
import { Project } from "@/lib/data";
import { voteProject, hasVoted } from "@/lib/storage";

interface ProjectCardProps {
  project: Project;
  onVote: () => void;
}

export default function ProjectCard({ project, onVote }: ProjectCardProps) {
  const [voted, setVoted] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setVoted(hasVoted(project.id));
  }, [project.id]);

  function handleVote() {
    if (voted) return;
    const success = voteProject(project.id);
    if (success) {
      setVoted(true);
      setAnimating(true);
      setTimeout(() => setAnimating(false), 600);
      onVote();
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/5 bg-dark-card p-6 transition-all duration-300 hover:border-neon-cyan/20 hover:shadow-[0_0_30px_#00f5ff11]">
      {/* Gradient accent top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold tracking-wide text-neon-cyan">
          {project.team}
        </h3>
        <span className="text-xs text-white/30">
          {new Date(project.createdAt).toLocaleDateString("es-ES")}
        </span>
      </div>

      {project.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.team}
            className="h-40 w-full object-cover"
          />
        </div>
      )}

      <div className="mb-3">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-neon-pink/70">Problema</p>
        <p className="text-sm text-white/70">{project.problem}</p>
      </div>

      <div className="mb-3">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-neon-violet/70">Solución</p>
        <p className="text-sm text-white/70">{project.solution}</p>
      </div>

      <div className="mb-5">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-neon-cyan/70">Necesita</p>
        <p className="text-sm text-white/70">{project.needs}</p>
      </div>

      <div className="flex items-center justify-between border-t border-white/5 pt-4">
        <button
          onClick={handleVote}
          disabled={voted}
          className={`flex items-center gap-2 rounded-lg border px-4 py-2 font-display text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
            voted
              ? "border-neon-violet/30 bg-neon-violet/10 text-neon-violet cursor-default"
              : "border-white/10 bg-white/5 text-white/60 hover:border-neon-violet/50 hover:bg-neon-violet/10 hover:text-neon-violet hover:shadow-[0_0_20px_#a855f733] cursor-pointer"
          } ${animating ? "scale-110" : ""}`}
        >
          <span className={`text-lg transition-transform ${animating ? "scale-125" : ""}`}>
            {voted ? "💜" : "🤍"}
          </span>
          <span>{voted ? "Votado" : "Votar"}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold text-neon-violet">
            {project.votes}
          </span>
          <span className="text-xs text-white/30">votos</span>
        </div>
      </div>
    </div>
  );
}
