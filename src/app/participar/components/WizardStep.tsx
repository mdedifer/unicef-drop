"use client";

import { useRef } from "react";

interface WizardStepProps {
  phase: number;
  title: string;
  icon: string;
  color: string;
  question: string;
  description: string;
  tip: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  showImage?: boolean;
  image?: string;
  onImageChange?: (dataUrl: string) => void;
}

export default function WizardStep({
  phase,
  title,
  icon,
  color,
  question,
  description,
  tip,
  placeholder,
  value,
  onChange,
  showImage,
  image,
  onImageChange,
}: WizardStepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !onImageChange) return;
    const reader = new FileReader();
    reader.onload = () => onImageChange(reader.result as string);
    reader.readAsDataURL(file);
  }

  const colorClasses = {
    cyan: { text: "text-neon-cyan", border: "border-neon-cyan/30", bg: "bg-neon-cyan/5", focus: "focus:border-neon-cyan/50 focus:shadow-[0_0_15px_#00f5ff22]" },
    violet: { text: "text-neon-violet", border: "border-neon-violet/30", bg: "bg-neon-violet/5", focus: "focus:border-neon-violet/50 focus:shadow-[0_0_15px_#a855f722]" },
    pink: { text: "text-neon-pink", border: "border-neon-pink/30", bg: "bg-neon-pink/5", focus: "focus:border-neon-pink/50 focus:shadow-[0_0_15px_#ff008022]" },
  }[color] || { text: "text-neon-cyan", border: "border-neon-cyan/30", bg: "bg-neon-cyan/5", focus: "focus:border-neon-cyan/50 focus:shadow-[0_0_15px_#00f5ff22]" };

  return (
    <div className="animate-fade-in-up">
      {/* Phase header */}
      <div className="mb-8">
        <div className={`mb-3 inline-flex items-center gap-2 rounded-full border ${colorClasses.border} ${colorClasses.bg} px-4 py-2`}>
          <span className="text-lg">{icon}</span>
          <span className={`font-display text-xs tracking-[0.2em] uppercase ${colorClasses.text}`}>
            Fase {phase + 1} — {title}
          </span>
        </div>

        <h2 className={`font-display text-2xl font-bold tracking-wider md:text-3xl ${colorClasses.text}`}>
          {question}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/40">
          {description}
        </p>
      </div>

      {/* Tip */}
      <div className={`mb-6 rounded-lg border ${colorClasses.border} ${colorClasses.bg} p-4`}>
        <p className="text-xs font-semibold text-white/50">
          💡 <span className={colorClasses.text}>Consejo:</span> {tip}
        </p>
      </div>

      {/* Textarea */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        placeholder={placeholder}
        className={`w-full rounded-lg border border-white/10 bg-dark-card px-5 py-4 text-white placeholder:text-white/20 ${colorClasses.focus} transition-all resize-none focus:outline-none`}
      />

      {/* Image upload (phase 3 only) */}
      {showImage && (
        <div className="mt-6">
          <label className="mb-2 block font-display text-xs font-bold tracking-wider text-white/40 uppercase">
            Imagen de tu idea (opcional)
          </label>
          <div
            onClick={() => fileInputRef.current?.click()}
            className="flex min-h-[100px] cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-white/10 bg-dark-card transition-all hover:border-neon-violet/30"
          >
            {image ? (
              <img src={image} alt="Preview" className="max-h-48 rounded-lg object-contain" />
            ) : (
              <div className="py-6 text-center">
                <span className="text-2xl">📷</span>
                <p className="mt-1 text-xs text-white/30">Haz clic para subir</p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
}
