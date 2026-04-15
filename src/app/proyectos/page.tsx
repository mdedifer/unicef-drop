"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { getProjects, type ProjectRow } from "@/lib/storage";
import { getUser } from "@/lib/auth";

export default function Proyectos() {
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getProjects(), getUser()]).then(([p, u]) => {
      setProjects(p);
      setUserId(u?.id ?? null);
      setLoading(false);
    });
  }, []);

  async function reload() {
    const p = await getProjects();
    setProjects(p);
  }

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="font-display text-sm text-white/30">Cargando proyectos...</span>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl font-bold tracking-wider md:text-5xl">
          <span className="bg-gradient-to-r from-neon-violet to-neon-pink bg-clip-text text-transparent">
            Proyectos
          </span>
        </h1>
        <p className="mt-4 text-white/50">
          Vota por las ideas que merecen ganar. 1 voto por proyecto.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <span className="font-display text-sm font-bold text-neon-violet">
            {projects.length}
          </span>
          <span className="text-sm text-white/40">propuestas enviadas</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <ProjectCard project={project} userId={userId} onVote={reload} />
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="py-24 text-center">
          <span className="text-5xl">🎵</span>
          <p className="mt-4 font-display text-lg text-white/30">
            Aún no hay proyectos. ¡Sé el primero en participar!
          </p>
        </div>
      )}
    </section>
  );
}
