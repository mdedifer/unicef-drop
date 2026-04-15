import Image from "next/image";
import GlowButton from "@/components/GlowButton";
import { activeDrops } from "@/lib/data";

export default function Premios() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex rounded-full border border-neon-violet/20 bg-neon-violet/5 px-4 py-2">
          <span className="font-display text-xs tracking-[0.3em] text-neon-violet uppercase">
            Temporada 1
          </span>
        </div>
        <h1 className="font-display text-4xl font-bold tracking-wider md:text-6xl">
          <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink bg-clip-text text-transparent">
            Premios
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/50">
          Los proyectos ganadores de cada Drop reciben financiación real de UNICEF para hacerse realidad,
          más una colaboración directa con el embajador.
        </p>
      </div>

      {/* Gran premio principal */}
      <div className="relative mb-16 overflow-hidden rounded-2xl border border-neon-cyan/20 bg-dark-card box-glow-cyan">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink" />
        <div className="p-10 text-center md:p-16">
          <span className="font-display text-xs tracking-[0.3em] text-neon-cyan/60 uppercase">
            Premio principal por Drop
          </span>
          <p className="mt-6 font-display text-6xl font-black text-white md:text-8xl">
            10.000<span className="text-neon-cyan">€</span>
          </p>
          <p className="mt-4 text-xl text-white/50">
            de financiación para ejecutar tu proyecto
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 rounded-full border border-neon-violet/20 bg-neon-violet/5 px-5 py-2">
              <span className="text-lg">🎤</span>
              <span className="font-display text-sm tracking-wide text-neon-violet">Collab con el embajador</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-neon-pink/20 bg-neon-pink/5 px-5 py-2">
              <span className="text-lg">📣</span>
              <span className="font-display text-sm tracking-wide text-neon-pink">Visibilidad en RRSS</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-5 py-2">
              <span className="text-lg">🧑‍🏫</span>
              <span className="font-display text-sm tracking-wide text-neon-cyan">Mentoría UNICEF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Premios por posición */}
      <div className="mb-20 grid gap-6 md:grid-cols-3">
        {[
          {
            position: "1er puesto",
            amount: "10.000€",
            perks: ["Financiación completa", "Collab con embajador", "Mentoría UNICEF", "Visibilidad en RRSS del embajador"],
            color: "cyan",
            border: "border-neon-cyan/30",
            bg: "bg-neon-cyan/5",
            text: "text-neon-cyan",
            glow: "box-glow-cyan",
            badge: "🥇",
          },
          {
            position: "2do puesto",
            amount: "5.000€",
            perks: ["Financiación parcial", "Mentoría UNICEF", "Visibilidad en RRSS"],
            color: "violet",
            border: "border-neon-violet/30",
            bg: "bg-neon-violet/5",
            text: "text-neon-violet",
            glow: "box-glow-violet",
            badge: "🥈",
          },
          {
            position: "3er puesto",
            amount: "3.000€",
            perks: ["Financiación inicial", "Certificado UNICEF", "Visibilidad en RRSS"],
            color: "pink",
            border: "border-neon-pink/30",
            bg: "bg-neon-pink/5",
            text: "text-neon-pink",
            glow: "box-glow-pink",
            badge: "🥉",
          },
        ].map((prize, i) => (
          <div
            key={prize.position}
            className={`relative overflow-hidden rounded-2xl border ${prize.border} ${prize.bg} p-8 transition-all duration-300 hover:scale-[1.02] ${prize.glow} ${i === 0 ? "md:-mt-4 md:mb-4" : ""}`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="mb-4 text-center">
              <span className="text-5xl">{prize.badge}</span>
            </div>

            <div className="text-center">
              <p className="font-display text-xs tracking-[0.2em] text-white/30 uppercase">{prize.position}</p>
              <p className={`mt-2 font-display text-4xl font-black ${prize.text}`}>{prize.amount}</p>
            </div>

            <ul className="mt-6 space-y-3">
              {prize.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm text-white/50">
                  <span className={`h-1 w-1 rounded-full ${prize.text.replace("text-", "bg-")}`} />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Premios por Drop con embajadores */}
      <div className="mb-20">
        <h2 className="mb-10 text-center font-display text-2xl font-bold tracking-wider md:text-3xl">
          <span className="text-white/90">Premios por </span>
          <span className="text-neon-violet glow-violet">Drop</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {activeDrops.map((drop) => {
            const colors = {
              cyan: { border: "border-neon-cyan/20", text: "text-neon-cyan", bg: "bg-neon-cyan/5" },
              violet: { border: "border-neon-violet/20", text: "text-neon-violet", bg: "bg-neon-violet/5" },
              pink: { border: "border-neon-pink/20", text: "text-neon-pink", bg: "bg-neon-pink/5" },
            }[drop.color];

            return (
              <div
                key={drop.id}
                className={`overflow-hidden rounded-xl border ${colors.border} bg-dark-card`}
              >
                {/* Ambassador photo */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={drop.ambassadorPhoto}
                    alt={drop.ambassador}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-display text-sm font-bold text-white drop-shadow-lg">{drop.ambassador}</p>
                    <p className="text-xs text-white/60">Embajador</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className={`font-display text-lg font-black tracking-wider ${colors.text}`}>
                    {drop.title}
                  </p>
                  <p className="mt-2 text-sm text-white/40">{drop.subtitle}</p>

                  <div className={`mt-4 rounded-lg border border-white/5 ${colors.bg} p-3 text-center`}>
                    <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Premio total</p>
                    <p className={`mt-1 font-display text-lg font-bold ${colors.text}`}>{drop.prize}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/5 bg-dark-card p-12">
          <h2 className="font-display text-2xl font-bold tracking-wider md:text-3xl">
            <span className="text-white/90">¿Quieres competir por </span>
            <span className="text-neon-cyan glow-cyan">estos premios</span>
            <span className="text-white/90">?</span>
          </h2>
          <p className="mt-4 text-white/40">
            Elige un Drop, envía tu idea y compite por financiación real de UNICEF.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GlowButton href="/participar" color="cyan" size="lg">
              Participar ahora
            </GlowButton>
            <GlowButton href="/proyectos" color="violet" size="md">
              Ver proyectos
            </GlowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
