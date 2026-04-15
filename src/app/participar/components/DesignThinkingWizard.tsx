"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import GlowButton from "@/components/GlowButton";
import WizardStep from "./WizardStep";
import { Draft, activeDrops } from "@/lib/data";
import { updateDraft, submitDraft } from "@/lib/storage";

const STEPS = [
  {
    title: "Empatizar",
    icon: "👥",
    color: "pink",
    question: "¿A quién afecta este problema?",
    description: "Ponte en la piel de las personas afectadas. Piensa en sus emociones, sus frustraciones, su día a día. La empatía es el primer paso para crear algo que realmente importe.",
    tip: "Habla con personas reales que sufran este problema. Observa, escucha, no asumas. Cuanta más empatía, mejor será tu solución.",
    placeholder: "Describe al colectivo afectado: quiénes son, qué sienten, qué viven a diario, por qué es urgente actuar...",
    field: "empathize" as const,
  },
  {
    title: "Definir",
    icon: "🎯",
    color: "cyan",
    question: "¿Cuál es el problema concreto?",
    description: "Ahora que entiendes a las personas, define el problema real. Un buen problema bien definido ya contiene la mitad de la solución. Sé específico.",
    tip: "Usa la fórmula: '[Persona] necesita [necesidad] porque [insight]'. Ejemplo: 'Los adolescentes de 15 años necesitan un espacio seguro para hablar de ansiedad porque los adultos no les toman en serio.'",
    placeholder: "Define el problema de forma clara y concreta. ¿Qué necesitan exactamente estas personas y por qué?",
    field: "define" as const,
  },
  {
    title: "Idear",
    icon: "💡",
    color: "violet",
    question: "¿Cuál es tu solución?",
    description: "Es hora de ser creativo. No te censures. La mejor idea es la que conecta empatía con acción. Piensa en algo que estas personas querrían usar de verdad.",
    tip: "Piensa en cómo se lo explicarías a un amigo en 30 segundos. Si no puedes, simplifícalo. Las mejores soluciones son las más claras.",
    placeholder: "Describe tu idea: qué es, cómo funciona, qué la hace diferente de lo que ya existe...",
    field: "ideate" as const,
  },
  {
    title: "Prototipar",
    icon: "🔧",
    color: "cyan",
    question: "¿Cómo lo llevarías a la práctica?",
    description: "Baja tu idea al mundo real. ¿Cuáles son los primeros pasos concretos? No hace falta que sea perfecto — hace falta que sea ejecutable.",
    tip: "Piensa en el mínimo viable: ¿cuál es la versión más simple de tu idea que puedes probar en una semana? Empieza por ahí.",
    placeholder: "Pasos concretos para hacer tu idea realidad: qué harías primero, qué tecnología usarías, cómo llegarías a los usuarios...",
    field: "prototype" as const,
  },
  {
    title: "Testar",
    icon: "🧪",
    color: "pink",
    question: "¿Qué necesitas para validarlo?",
    description: "Última fase. Piensa en qué recursos, equipo y financiación necesitas. Y sobre todo: ¿cómo sabrás si funciona? Define tus métricas de éxito.",
    tip: "UNICEF financiará los mejores proyectos. Sé realista con lo que pides y claro con lo que conseguirás a cambio. Los números convencen.",
    placeholder: "Recursos necesarios (equipo, dinero, herramientas), cómo medirías el éxito, qué harías en los primeros 3 meses...",
    field: "test" as const,
  },
];

interface WizardProps {
  draft: Draft;
  onBack: () => void;
}

export default function DesignThinkingWizard({ draft, onBack }: WizardProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(draft.currentStep);
  const [fields, setFields] = useState({
    empathize: draft.empathize,
    define: draft.define,
    ideate: draft.ideate,
    ideateImage: draft.ideateImage,
    prototype: draft.prototype,
    test: draft.test,
  });
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const drop = activeDrops.find((d) => d.id === draft.dropId) || activeDrops[0];

  const save = useCallback((step?: number) => {
    setSaving(true);
    updateDraft(draft.id, {
      ...fields,
      currentStep: step ?? currentStep,
    });
    setTimeout(() => setSaving(false), 500);
  }, [draft.id, fields, currentStep]);

  function goNext() {
    if (currentStep < 4) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      save(nextStep);
    }
  }

  function goPrev() {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      save(prevStep);
    }
  }

  function handleSubmit() {
    save();
    submitDraft(draft.id);
    setSubmitted(true);
    setTimeout(() => router.push("/proyectos"), 2000);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-neon-cyan/30 bg-neon-cyan/10 box-glow-cyan">
            <span className="text-5xl">🚀</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-wider text-neon-cyan glow-cyan">
            ¡Propuesta enviada!
          </h2>
          <p className="mt-4 text-white/50">
            Tu proyecto ya está en el feed público. Redirigiendo...
          </p>
        </div>
      </div>
    );
  }

  const step = STEPS[currentStep];
  const isLast = currentStep === 4;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      {/* Top bar */}
      <div className="mb-8 flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-white/30 hover:text-white/60 transition-colors cursor-pointer">
          ← Volver al panel
        </button>
        <div className="flex items-center gap-3">
          <span className="text-xs text-white/20">
            {drop.title}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-display text-xs text-white/40">
            {draft.team}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between">
          {STEPS.map((s, i) => {
            const isActive = i === currentStep;
            const isDone = i < currentStep;
            return (
              <div key={s.title} className="flex flex-1 items-center">
                <button
                  onClick={() => { save(); setCurrentStep(i); }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all cursor-pointer ${
                    isActive
                      ? "border-neon-cyan bg-neon-cyan/10 text-neon-cyan scale-110"
                      : isDone
                        ? "border-neon-cyan/40 bg-neon-cyan/5 text-neon-cyan/60"
                        : "border-white/10 bg-dark-card text-white/20"
                  }`}
                >
                  <span className="text-sm">{isDone ? "✓" : s.icon}</span>
                </button>
                {i < 4 && (
                  <div className={`mx-1 h-px flex-1 ${isDone ? "bg-neon-cyan/30" : "bg-white/5"}`} />
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-2 flex justify-between">
          {STEPS.map((s) => (
            <span key={s.title} className="flex-1 text-center text-[10px] text-white/20">
              {s.title}
            </span>
          ))}
        </div>
      </div>

      {/* Step content */}
      <WizardStep
        key={currentStep}
        phase={currentStep}
        title={step.title}
        icon={step.icon}
        color={step.color}
        question={step.question}
        description={step.description}
        tip={step.tip}
        placeholder={step.placeholder}
        value={fields[step.field]}
        onChange={(val) => setFields({ ...fields, [step.field]: val })}
        showImage={currentStep === 2}
        image={fields.ideateImage}
        onImageChange={(url) => setFields({ ...fields, ideateImage: url })}
      />

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between">
        <div>
          {currentStep > 0 && (
            <GlowButton onClick={goPrev} color="violet" size="sm">
              ← Anterior
            </GlowButton>
          )}
        </div>

        <div className="flex items-center gap-3">
          {saving && (
            <span className="text-xs text-neon-cyan/50">Guardado ✓</span>
          )}
          <GlowButton onClick={() => { save(); onBack(); }} color="violet" size="sm">
            Guardar borrador
          </GlowButton>
          {isLast ? (
            <GlowButton onClick={handleSubmit} color="cyan" size="md">
              Enviar propuesta 🚀
            </GlowButton>
          ) : (
            <GlowButton onClick={goNext} color="cyan" size="sm">
              Siguiente →
            </GlowButton>
          )}
        </div>
      </div>
    </section>
  );
}
