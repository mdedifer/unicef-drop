"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { onAuthChange, getUserName } from "@/lib/auth";
import type { User } from "@supabase/supabase-js";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#drops", label: "Drops" },
  { href: "/participar", label: "Participar" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/ganadores", label: "Premios" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: { subscription } } = onAuthChange((u) => setUser(u));
    return () => subscription.unsubscribe();
  }, []);

  const initials = user
    ? getUserName(user)
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/drop-logo.png"
            alt="UNICEF DROP"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-display text-xl font-bold tracking-widest text-neon-cyan glow-cyan">DROP</span>
          <span className="h-5 w-px bg-white/15" />
          <Image
            src="/unicef-logo.png"
            alt="UNICEF"
            width={80}
            height={23}
            className="brightness-0 invert opacity-50"
          />
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => {
            const isActive = link.href.startsWith("/#")
              ? false
              : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? "text-neon-cyan glow-cyan"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {user && (
            <Link
              href="/participar"
              className="flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1.5 transition-all hover:border-neon-cyan/40"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neon-cyan/20 font-display text-[10px] font-bold text-neon-cyan">
                {initials}
              </span>
              <span className="text-xs text-white/60">{getUserName(user).split(" ")[0]}</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
