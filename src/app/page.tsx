import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import GlowButton from "@/components/GlowButton";
import { activeDrops } from "@/lib/data";

const colorStyles = {
  cyan: {
    gradient: "from-neon-cyan to-neon-cyan/60",
    text: "text-neon-cyan",
    textMuted: "text-neon-cyan/70",
    border: "border-neon-cyan/20",
    borderHover: "hover:border-neon-cyan/40",
    bg: "bg-neon-cyan/5",
    glow: "box-glow-cyan",
    badge: "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan",
    avatar: "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan",
  },
  violet: {
    gradient: "from-neon-violet to-neon-violet/60",
    text: "text-neon-violet",
    textMuted: "text-neon-violet/70",
    border: "border-neon-violet/20",
    borderHover: "hover:border-neon-violet/40",
    bg: "bg-neon-violet/5",
    glow: "box-glow-violet",
    badge: "border-neon-violet/30 bg-neon-violet/10 text-neon-violet",
    avatar: "border-neon-violet/30 bg-neon-violet/10 text-neon-violet",
  },
  pink: {
    gradient: "from-neon-pink to-neon-pink/60",
    text: "text-neon-pink",
    textMuted: "text-neon-pink/70",
    border: "border-neon-pink/20",
    borderHover: "hover:border-neon-pink/40",
    bg: "bg-neon-pink/5",
    glow: "box-glow-pink",
    badge: "border-neon-pink/30 bg-neon-pink/10 text-neon-pink",
    avatar: "border-neon-pink/30 bg-neon-pink/10 text-neon-pink",
  },
};

export default function Landing() {
  return (
    <>
      {/* HERO — UNICEF + DROP */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Background glow orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-neon-cyan/5 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-neon-violet/5 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-pink/3 blur-[100px]" />

        {/* UNICEF logo */}
        <div className="mb-10 animate-fade-in-up">
          <Image
            src="/unicef-logo.png"
            alt="UNICEF"
            width={280}
            height={80}
            className="brightness-0 invert opacity-80"
            priority
          />
        </div>

        {/* Title */}
        <h1
          className="animate-fade-in-up font-display text-7xl font-black tracking-wider md:text-8xl lg:text-9xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink bg-clip-text text-transparent">
            DROP
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="mx-auto mt-6 max-w-3xl animate-fade-in-up text-xl leading-relaxed text-white/60 md:text-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          La plataforma de <span className="font-semibold text-white/90">UNICEF</span> donde los jóvenes españoles compiten para{" "}
          <span className="text-neon-cyan">cambiar el mundo</span>, con los creadores que ya siguen como embajadores
          y financiación real como premio.
        </p>

        {/* Quick stats */}
        <div
          className="mt-10 flex animate-fade-in-up items-center gap-8 md:gap-12"
          style={{ animationDelay: "0.3s" }}
        >
          {[
            { value: `${activeDrops.length}`, label: "Drops activos" },
            { value: "655+", label: "Jóvenes participando" },
            { value: "26.000€", label: "En premios" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl font-black text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-white/30">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="mt-16 animate-fade-in-up animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="text-xs tracking-[0.3em] text-white/20 uppercase">Explora los drops</span>
          <div className="mx-auto mt-2 h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      {/* QUÉ ES DROP */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-2xl border border-white/5 bg-dark-card p-10 md:p-14">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-display text-sm font-bold tracking-widest text-white/40 uppercase">Powered by</span>
            <span className="font-display text-lg font-bold tracking-widest text-white">UNICEF España</span>
          </div>

          <h2 className="font-display text-3xl font-bold tracking-wider md:text-4xl">
            <span className="text-white/90">¿Qué es </span>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">DROP</span>
            <span className="text-white/90">?</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
            Como cuando un DJ suelta un tema, <span className="text-white/80">UNICEF lanza un Drop</span>: un reto social
            que necesita soluciones. Los jóvenes responden con sus ideas, la comunidad vota
            y los ganadores reciben <span className="text-neon-cyan">financiación real</span> para hacer su proyecto realidad.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "UNICEF lanza un Drop",
                desc: "Un reto social real con un influencer como embajador. Salud mental, derechos digitales, pobreza infantil...",
                color: "cyan",
              },
              {
                step: "02",
                title: "Tú propones la solución",
                desc: "Canvas de 3 preguntas. Problema, solución, recursos. Solo o en equipo. Sin burocracia.",
                color: "violet",
              },
              {
                step: "03",
                title: "Los mejores ganan",
                desc: "La comunidad vota, el jurado (UNICEF + influencers) decide. Los ganadores reciben financiación + collab con el embajador.",
                color: "pink",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative overflow-hidden rounded-xl border border-white/5 bg-dark/50 p-6"
              >
                <span className={`font-display text-4xl font-black ${item.color === "cyan" ? "text-neon-cyan/15" : item.color === "violet" ? "text-neon-violet/15" : "text-neon-pink/15"}`}>
                  {item.step}
                </span>
                <h3 className={`mt-2 font-display text-base font-bold tracking-wide ${item.color === "cyan" ? "text-neon-cyan" : item.color === "violet" ? "text-neon-violet" : "text-neon-pink"}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DROPS ACTIVOS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-5 py-2">
            <span className="font-display text-xs tracking-[0.3em] text-neon-cyan uppercase">
              Temporada 1
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-wider md:text-5xl">
            <span className="text-white/90">Drops </span>
            <span className="text-neon-cyan glow-cyan">activos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/40">
            Elige un reto de UNICEF y envía tu solución. Cada Drop tiene su propio embajador, premio y fecha límite.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {activeDrops.map((drop, i) => {
            const s = colorStyles[drop.color];
            return (
              <div
                key={drop.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border ${s.border} ${s.borderHover} bg-dark-card transition-all duration-500 hover:scale-[1.02] ${s.glow}`}
              >
                {/* Ambassador photo */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={drop.ambassadorPhoto}
                    alt={drop.ambassador}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/60 to-transparent" />
                  {/* Theme badge on photo */}
                  <div className={`absolute top-4 left-4 rounded-full border px-3 py-1 backdrop-blur-sm ${s.badge}`}>
                    <span className="font-display text-[10px] tracking-[0.2em] uppercase">{drop.theme}</span>
                  </div>
                  {/* Ambassador name on photo */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-lg font-bold tracking-wide text-white drop-shadow-lg">
                      {drop.ambassador}
                    </p>
                    <p className="text-xs text-white/60">{drop.ambassadorRole}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Title */}
                  <h3 className={`font-display text-2xl font-black tracking-wider ${s.text}`}>
                    {drop.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/40">
                    {drop.subtitle}
                  </p>

                  {/* Stats */}
                  <div className="mt-5 flex gap-6">
                    <div>
                      <p className={`font-display text-lg font-bold ${s.text}`}>{drop.participants}</p>
                      <p className="text-[10px] text-white/30 uppercase">Participantes</p>
                    </div>
                    <div>
                      <p className={`font-display text-lg font-bold ${s.text}`}>{drop.proposals}</p>
                      <p className="text-[10px] text-white/30 uppercase">Propuestas</p>
                    </div>
                  </div>

                  {/* Prize */}
                  <div className="mt-5 rounded-lg border border-white/5 bg-dark/50 p-3 text-center">
                    <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase">Premio</p>
                    <p className={`mt-1 font-display text-sm font-bold ${s.text}`}>{drop.prize}</p>
                  </div>

                  {/* Countdown */}
                  <div className="mt-5">
                    <p className="mb-2 text-[10px] tracking-[0.2em] text-white/30 uppercase">Tiempo restante</p>
                    <CountdownTimer deadline={drop.deadline} compact />
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <GlowButton href="/participar" color={drop.color} size="md" className="w-full">
                      Participar
                    </GlowButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* UNICEF SECTION */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/3 to-transparent" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-display text-sm font-bold tracking-[0.3em] text-white/20 uppercase">Una iniciativa de</span>
          <div className="mt-6 flex justify-center">
            <Image
              src="/unicef-logo.png"
              alt="UNICEF España"
              width={220}
              height={63}
              className="brightness-0 invert opacity-70"
            />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
            DROP nace del reto de UNICEF de involucrar a 3.000 jóvenes al año en el diseño
            de soluciones a los principales desafíos de la infancia y adolescencia en España.
            No es voluntariado. Es un escenario donde tu idea es la entrada y el premio es verla hecha realidad.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { value: "3.000", label: "Jóvenes al año", sub: "Objetivo UNICEF" },
              { value: "16-30", label: "Años", sub: "Rango de edad" },
              { value: "100%", label: "Financiación real", sub: "Para proyectos ganadores" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/5 bg-dark-card p-6">
                <p className="font-display text-3xl font-black text-neon-cyan">{item.value}</p>
                <p className="mt-1 text-sm font-semibold text-white/60">{item.label}</p>
                <p className="text-xs text-white/25">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold tracking-wider md:text-4xl">
          <span className="text-white/90">Tu idea puede </span>
          <span className="bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink bg-clip-text text-transparent">
            cambiar las cosas
          </span>
        </h2>
        <p className="mt-4 text-white/40">
          Elige un Drop, envía tu propuesta y compite por financiación real de UNICEF.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <GlowButton href="/participar" color="cyan" size="lg">
            Participar ahora
          </GlowButton>
          <GlowButton href="/proyectos" color="violet" size="lg">
            Ver proyectos
          </GlowButton>
        </div>
      </section>
    </>
  );
}
