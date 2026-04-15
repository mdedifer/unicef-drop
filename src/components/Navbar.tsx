"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getUser } from "@/lib/auth";
import { User } from "@/lib/data";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/participar", label: "Participar" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/ganadores", label: "Premios" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(getUser());
  }, [pathname]);

  const initials = user
    ? user.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <span className="font-display text-2xl font-bold tracking-widest text-neon-cyan glow-cyan">DROP</span>
          <span className="h-5 w-px bg-white/15" />
          <Image
            src="/unicef-logo.png"
            alt="UNICEF"
            width={90}
            height={26}
            className="brightness-0 invert opacity-50"
          />
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-neon-cyan glow-cyan"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {user && (
            <Link
              href="/participar"
              className="flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1.5 transition-all hover:border-neon-cyan/40"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neon-cyan/20 font-display text-[10px] font-bold text-neon-cyan">
                {initials}
              </span>
              <span className="text-xs text-white/60">{user.name.split(" ")[0]}</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
