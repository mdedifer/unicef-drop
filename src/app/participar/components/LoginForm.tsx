"use client";

import { useState } from "react";
import GlowButton from "@/components/GlowButton";
import { User } from "@/lib/data";
import { login } from "@/lib/auth";

interface LoginFormProps {
  onLogin: (user: User) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const user = login(name.trim(), email.trim());
    onLogin(user);
  }

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-2">
            <span className="font-display text-xs tracking-[0.3em] text-neon-cyan uppercase">
              Accede a tu panel
            </span>
          </div>
          <h1 className="font-display text-3xl font-bold tracking-wider md:text-4xl">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
              Únete al Drop
            </span>
          </h1>
          <p className="mt-4 text-white/40">
            Regístrate para enviar tu propuesta y competir por financiación real de UNICEF.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <div className="pt-2">
            <GlowButton type="submit" color="cyan" size="lg" className="w-full">
              Entrar
            </GlowButton>
          </div>
        </form>

        <p className="mt-8 text-center text-xs text-white/20">
          Sin contraseña. Tus datos se guardan en tu navegador.
        </p>
      </div>
    </section>
  );
}
