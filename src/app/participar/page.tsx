"use client";

import { useState, useEffect } from "react";
import { onAuthChange, getUser as fetchUser, getUserName } from "@/lib/auth";
import { getDraft, type DraftRow } from "@/lib/storage";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import DesignThinkingWizard from "./components/DesignThinkingWizard";
import type { User } from "@supabase/supabase-js";

type View = "loading" | "login" | "dashboard" | "wizard";

export default function Participar() {
  const [view, setView] = useState<View>("loading");
  const [user, setUser] = useState<User | null>(null);
  const [activeDraft, setActiveDraft] = useState<DraftRow | null>(null);

  useEffect(() => {
    // Check initial session
    fetchUser().then((u) => {
      if (u) {
        setUser(u);
        setView("dashboard");
      } else {
        setView("login");
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = onAuthChange((u) => {
      setUser(u);
      if (u) {
        setView("dashboard");
      } else {
        setView("login");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  function handleLogin(u: User) {
    setUser(u);
    setView("dashboard");
  }

  function handleLogout() {
    setUser(null);
    setActiveDraft(null);
    setView("login");
  }

  async function handleEditDraft(draftId: string) {
    const draft = await getDraft(draftId);
    if (draft) {
      setActiveDraft(draft);
      setView("wizard");
    }
  }

  function handleBackToDashboard() {
    setActiveDraft(null);
    setView("dashboard");
  }

  if (view === "loading") {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <span className="font-display text-sm text-white/30">Cargando...</span>
      </div>
    );
  }

  if (view === "login") {
    return <LoginForm onLogin={handleLogin} />;
  }

  if (view === "wizard" && activeDraft && user) {
    return (
      <DesignThinkingWizard
        draft={activeDraft}
        userId={user.id}
        onBack={handleBackToDashboard}
      />
    );
  }

  if (view === "dashboard" && user) {
    return (
      <Dashboard
        user={user}
        onLogout={handleLogout}
        onEditDraft={handleEditDraft}
        onNewDraft={handleEditDraft}
      />
    );
  }

  return null;
}
