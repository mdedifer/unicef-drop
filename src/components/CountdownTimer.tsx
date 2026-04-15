"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  deadline: string;
  compact?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(deadline: string): TimeLeft {
  const diff = new Date(deadline).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ deadline, compact = false }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calcTimeLeft(deadline));
    const timer = setInterval(() => setTimeLeft(calcTimeLeft(deadline)), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  if (!timeLeft) {
    // SSR placeholder — avoids hydration mismatch
    if (compact) {
      return (
        <div className="flex gap-2">
          {["d", "h", "m", "s"].map((l) => (
            <div key={l} className="flex items-baseline gap-0.5">
              <span className="font-display text-base font-bold text-white/80">--</span>
              <span className="text-[10px] text-white/30">{l}</span>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="flex gap-4">
        {["Días", "Horas", "Min", "Seg"].map((l) => (
          <div key={l} className="flex flex-col items-center">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-lg border border-neon-cyan/30 bg-dark-card box-glow-cyan">
              <span className="font-display text-3xl font-bold text-neon-cyan">--</span>
            </div>
            <span className="mt-2 text-xs uppercase tracking-widest text-white/40">{l}</span>
          </div>
        ))}
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex gap-2">
        {[
          { v: timeLeft.days, l: "d" },
          { v: timeLeft.hours, l: "h" },
          { v: timeLeft.minutes, l: "m" },
          { v: timeLeft.seconds, l: "s" },
        ].map((item) => (
          <div key={item.l} className="flex items-baseline gap-0.5">
            <span className="font-display text-base font-bold text-white/80">
              {String(item.v).padStart(2, "0")}
            </span>
            <span className="text-[10px] text-white/30">{item.l}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-4">
      {[
        { v: timeLeft.days, l: "Días" },
        { v: timeLeft.hours, l: "Horas" },
        { v: timeLeft.minutes, l: "Min" },
        { v: timeLeft.seconds, l: "Seg" },
      ].map((item) => (
        <div key={item.l} className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-lg border border-neon-cyan/30 bg-dark-card box-glow-cyan">
            <span className="font-display text-3xl font-bold text-neon-cyan">
              {String(item.v).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-xs uppercase tracking-widest text-white/40">{item.l}</span>
        </div>
      ))}
    </div>
  );
}
