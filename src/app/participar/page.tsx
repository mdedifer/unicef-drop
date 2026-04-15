"use client";

import { useState, useEffect } from "react";
import { User } from "@/lib/data";
import { getUser, logout } from "@/lib/auth";
import { getDraft } from "@/lib/storage";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import DesignThinkingWizard from "./components/DesignThinkingWizard";

type View = "loading" | "login" | "dashboard" | "wizard";

export default function Participar() {
  const [view, setView] = useState<View>("loading");
  const [user, setUser] = useState<User | null>(null);
  const [activeDraftId, setActiveDraftId] = useState<string | null>(null);

  useEffect(() => {
    const u = getUser();
    if (u) {
      setUser(u);
      setView("dashboard");
    } else {
      setView("login");
    }
  }, []);

  function handleLogin(u: User) {
    setUser(u);
    setView("dashboard");
  }

  function handleLogout() {
    logout();
    setUser(null);
    setView("login");
  }

  function handleEditDraft(draftId: string) {
    setActiveDraftId(draftId);
    setView("wizard");
  }

  function handleBackToDashboard() {
    setActiveDraftId(null);
    setView("dashboard");
  }

  if (view === "loading") {
    return <div className="flex min-h-[80vh] items-center justify-center" />;
  }

  if (view === "login") {
    return <LoginForm onLogin={handleLogin} />;
  }

  if (view === "wizard" && activeDraftId) {
    const draft = getDraft(activeDraftId);
    if (!draft) {
      setView("dashboard");
      return null;
    }
    return <DesignThinkingWizard draft={draft} onBack={handleBackToDashboard} />;
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
