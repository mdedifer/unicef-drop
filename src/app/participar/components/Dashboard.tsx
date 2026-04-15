"use client";

import { useState, useEffect } from "react";
import GlowButton from "@/components/GlowButton";
import { activeDrops } from "@/lib/data";
import { getDrafts, createDraft, type DraftRow } from "@/lib/storage";
import { signOut, getUserName } from "@/lib/auth";
import type { User } from "@supabase/supabase-js";

interface DashboardProps {
  user: User;
  onLogout: () => void;
  onEditDraft: (draftId: string) => void;
  onNewDraft: (draftId: string) => void;
}

export default function Dashboard({ user, onLogout, onEditDraft, onNewDraft }: DashboardProps) {
  const [drafts, setDrafts] = useState<DraftRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewForm, setShowNewForm] = useState(false);
  const [selectedDrop, setSelectedDrop] = useState(activeDrops[0].id);
  const [teamName, setTeamName] = useState(getUserName(user));

  useEffect(() => {
    getDrafts(user.id).then((d) => {
      setDrafts(d);
      setLoading(false);
    });
  }, [user.id]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!teamName.trim()) return;
    const draft = await createDraft(user.id, selectedDrop, teamName.trim());
    if (draft) onNewDraft(draft.id);
  }

  async function handleLogout() {
    await signOut();
    onLogout();
  }

  const activeDrafts = drafts.filter((d) => d.status === "draft");
  const submitted = drafts.filter((d) => d.status === "submitted");
  const userName = getUserName(user);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="font-display text-sm text-white/30">Cargando...</span>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <div>
          <p className="text-sm text-white/40">Panel de participante</p>
          <h1 className="mt-1 font-display text-3xl font-bold tracking-wider md:text-4xl">
            Hola, <span className="text-neon-cyan">{userName}</span>
          </h1>
        </div>
        <button
          onClick={handleLogout}
          className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer"
        >
          Cerrar sesión
        </button>
      </div>

      {/* New proposal button or form */}
      {!showNewForm ? (
        <div className="mb-12">
          <GlowButton onClick={() => setShowNewForm(true)} color="cyan" size="md">
            + Nueva propuesta
          </GlowButton>
        </div>
      ) : (
        <form onSubmit={handleCreate} className="mb-12 rounded-xl border border-neon-cyan/20 bg-dark-card p-6">
          <h3 className="mb-4 font-display text-lg font-bold tracking-wide text-neon-cyan">
            Nueva propuesta
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/40">
                Nombre del equipo
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-dark px-4 py-3 text-white placeholder:text-white/20 focus:border-neon-cyan/50 focus:outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/40">
                Drop
              </label>
              <select
                value={selectedDrop}
                onChange={(e) => setSelectedDrop(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-dark px-4 py-3 text-white focus:border-neon-cyan/50 focus:outline-none transition-all cursor-pointer"
              >
                {activeDrops.map((drop) => (
                  <option key={drop.id} value={drop.id} className="bg-dark">
                    {drop.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-end gap-2">
              <GlowButton type="submit" color="cyan" size="md">
                Empezar
              </GlowButton>
              <button
                type="button"
                onClick={() => setShowNewForm(false)}
                className="px-4 py-3 text-sm text-white/30 hover:text-white/60 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Active drafts */}
      {activeDrafts.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-4 font-display text-lg font-bold tracking-wider text-white/80">
            Borradores <span className="text-white/30">({activeDrafts.length})</span>
          </h2>
          <div className="grid gap-4">
            {activeDrafts.map((draft) => {
              const drop = activeDrops.find((d) => d.id === draft.drop_id) || activeDrops[0];
              return (
                <div
                  key={draft.id}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-dark-card p-5 transition-all hover:border-neon-cyan/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neon-violet/30 bg-neon-violet/10">
                      <span className="font-display text-sm font-bold text-neon-violet">
                        {draft.current_step + 1}/5
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold tracking-wide text-white/80">
                        {draft.team}
                      </p>
                      <p className="text-xs text-white/30">
                        {drop.title} · Fase {draft.current_step + 1} de 5
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/20">
                      {new Date(draft.updated_at).toLocaleDateString("es-ES")}
                    </span>
                    <GlowButton onClick={() => onEditDraft(draft.id)} color="violet" size="sm">
                      Continuar
                    </GlowButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Submitted */}
      {submitted.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-4 font-display text-lg font-bold tracking-wider text-white/80">
            Enviadas <span className="text-white/30">({submitted.length})</span>
          </h2>
          <div className="grid gap-4">
            {submitted.map((draft) => {
              const drop = activeDrops.find((d) => d.id === draft.drop_id) || activeDrops[0];
              return (
                <div
                  key={draft.id}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-dark-card p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10">
                      <span className="text-lg">✅</span>
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold tracking-wide text-white/80">
                        {draft.team}
                      </p>
                      <p className="text-xs text-white/30">
                        {drop.title} · Enviada
                      </p>
                    </div>
                  </div>
                  <GlowButton href="/proyectos" color="cyan" size="sm">
                    Ver en feed
                  </GlowButton>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty state */}
      {drafts.length === 0 && (
        <div className="rounded-2xl border border-white/5 bg-dark-card py-20 text-center">
          <span className="text-5xl">🎵</span>
          <p className="mt-4 font-display text-lg text-white/30">
            Aún no tienes propuestas
          </p>
          <p className="mt-2 text-sm text-white/20">
            Crea tu primera propuesta y compite por financiación real de UNICEF.
          </p>
        </div>
      )}
    </section>
  );
}
