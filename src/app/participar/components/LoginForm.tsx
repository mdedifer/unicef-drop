"use client";

import { useState } from "react";
import GlowButton from "@/components/GlowButton";
import { signUp, signIn } from "@/lib/auth";
import type { User } from "@supabase/supabase-js";

interface LoginFormProps {
  onLogin: (user: User) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [mode, setMode] = useState<"login" | "register">("register");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (mode === "register") {
      if (!name.trim()) {
        setError("Introduce tu nombre");
        setLoading(false);
        return;
      }
      const { user, error: err } = await signUp(name.trim(), email, password);
      if (err) {
        setError(err);
        setLoading(false);
        return;
      }
      if (user) onLogin(user);
    } else {
      const { user, error: err } = await signIn(email, password);
      if (err) {
        setError(err);
        setLoading(false);
        return;
      }
      if (user) onLogin(user);
    }

    setLoading(false);
  }

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-2">
            <span className="font-display text-xs tracking-[0.3em] text-neon-cyan uppercase">
              {mode === "register" ? "Crea tu cuenta" : "Inicia sesión"}
            </span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-wider md:text-4xl">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
              Únete al Drop
            </span>
          </h1>
          <p className="mt-4 text-white/40">
            {mode === "register"
              ? "Regístrate para enviar tu propuesta y competir por financiación real de UNICEF."
              : "Accede a tu panel para continuar con tus propuestas."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === "register" && (
            <div>
              <label className="mb-2 block font-display text-xs font-bold tracking-wider text-white/60 uppercase">
                Tu nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej: María García"
                className="w-full rounded-lg border border-white/10 bg-dark-card px-5 py-4 text-white placeholder:text-white/20 focus:border-neon-cyan/50 focus:outline-none focus:shadow-[0_0_15px_#00f5ff22] transition-all"
                required
              />
            </div>
          )}

          <div>
            <label className="mb-2 block font-display text-xs font-bold tracking-wider text-white/60 uppercase">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="maria@ejemplo.com"
              className="w-full rounded-lg border border-white/10 bg-dark-card px-5 py-4 text-white placeholder:text-white/20 focus:border-neon-cyan/50 focus:outline-none focus:shadow-[0_0_15px_#00f5ff22] transition-all"
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-display text-xs font-bold tracking-wider text-white/60 uppercase">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={mode === "register" ? "Mínimo 6 caracteres" : "Tu contraseña"}
              minLength={6}
              className="w-full rounded-lg border border-white/10 bg-dark-card px-5 py-4 text-white placeholder:text-white/20 focus:border-neon-cyan/50 focus:outline-none focus:shadow-[0_0_15px_#00f5ff22] transition-all"
              required
            />
          </div>

          {error && (
            <div className="rounded-lg border border-neon-pink/30 bg-neon-pink/5 px-4 py-3">
              <p className="text-sm text-neon-pink">{error}</p>
            </div>
          )}

          <div className="pt-2">
            <GlowButton type="submit" color="cyan" size="lg" className="w-full" disabled={loading}>
              {loading ? "Cargando..." : mode === "register" ? "Crear cuenta" : "Entrar"}
            </GlowButton>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-white/30">
          {mode === "register" ? (
            <>
              ¿Ya tienes cuenta?{" "}
              <button onClick={() => { setMode("login"); setError(null); }} className="text-neon-cyan hover:underline cursor-pointer">
                Inicia sesión
              </button>
            </>
          ) : (
            <>
              ¿No tienes cuenta?{" "}
              <button onClick={() => { setMode("register"); setError(null); }} className="text-neon-cyan hover:underline cursor-pointer">
                Regístrate
              </button>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
