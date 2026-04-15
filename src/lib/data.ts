export interface Project {
  id: string;
  team: string;
  problem: string;
  solution: string;
  needs: string;
  image?: string;
  votes: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface Draft {
  id: string;
  userId: string;
  dropId: string;
  currentStep: number;
  team: string;
  empathize: string;
  define: string;
  ideate: string;
  ideateImage?: string;
  prototype: string;
  test: string;
  status: "draft" | "submitted";
  createdAt: string;
  updatedAt: string;
}

export interface Winner {
  position: number;
  team: string;
  project: string;
  description: string;
  prize: string;
}

export interface Drop {
  id: string;
  title: string;
  subtitle: string;
  ambassador: string;
  ambassadorInitials: string;
  ambassadorPhoto: string;
  ambassadorRole: string;
  prize: string;
  theme: string;
  deadline: string;
  color: "cyan" | "violet" | "pink";
  participants: number;
  proposals: number;
}

export const activeDrops: Drop[] = [
  {
    id: "drop-salud-mental",
    title: "SALUD MENTAL",
    subtitle: "Diseña una solución para mejorar la salud mental de los jóvenes en España",
    ambassador: "Ibai Llanos",
    ambassadorInitials: "IL",
    ambassadorPhoto: "/ibai.jpg",
    ambassadorRole: "Embajador del Drop",
    prize: "10.000€ + collab con Ibai",
    theme: "Salud Mental",
    deadline: "2026-05-15T23:59:59.000Z",
    color: "cyan",
    participants: 312,
    proposals: 87,
  },
  {
    id: "drop-derechos-digitales",
    title: "DERECHOS DIGITALES",
    subtitle: "Crea una herramienta para proteger a los jóvenes del ciberacoso y la adicción digital",
    ambassador: "TheGrefg",
    ambassadorInitials: "TG",
    ambassadorPhoto: "/thegrefg.png",
    ambassadorRole: "Embajador del Drop",
    prize: "8.000€ + collab con TheGrefg",
    theme: "Derechos Digitales",
    deadline: "2026-05-03T23:59:59.000Z",
    color: "violet",
    participants: 198,
    proposals: 54,
  },
  {
    id: "drop-pobreza-infantil",
    title: "POBREZA INFANTIL",
    subtitle: "Propón una solución para reducir la pobreza infantil en los barrios más vulnerables de España",
    ambassador: "Lola Lolita",
    ambassadorInitials: "LL",
    ambassadorPhoto: "/lolalolita.jpg",
    ambassadorRole: "Embajadora del Drop",
    prize: "8.000€ + collab con Lola Lolita",
    theme: "Pobreza Infantil",
    deadline: "2026-05-30T23:59:59.000Z",
    color: "pink",
    participants: 145,
    proposals: 31,
  },
];

// Keep backward compat
export const activeDrop = activeDrops[0];

export const sampleProjects: Project[] = [
  {
    id: "sample-1",
    team: "MindWave",
    problem: "El 70% de los jóvenes españoles reporta ansiedad pero no sabe dónde buscar ayuda accesible y sin estigma.",
    solution: "App de micro-terapias diarias con IA que conecta anónimamente a jóvenes con psicólogos voluntarios en sesiones de 15 minutos.",
    needs: "Desarrollo de app móvil, acuerdos con colegios de psicólogos, y 5.000€ para infraestructura cloud.",
    votes: 47,
    createdAt: "2026-04-10T14:00:00.000Z",
  },
  {
    id: "sample-2",
    team: "SafeSpace",
    problem: "Los adolescentes sufren ciberacoso en redes pero no denuncian por miedo a perder su vida social online.",
    solution: "Bot de Discord/Twitch que detecta patrones de acoso en tiempo real y ofrece mediación anónima entre las partes.",
    needs: "Equipo de NLP en español, partnerships con plataformas de streaming, y validación con psicólogos especializados.",
    votes: 35,
    createdAt: "2026-04-12T10:00:00.000Z",
  },
  {
    id: "sample-3",
    team: "BreakFree",
    problem: "La adicción al móvil entre jóvenes de 14 a 20 años está disparada. Pasan más de 7 horas al día en pantallas.",
    solution: "Gamificación de retos offline: una app que te premia con puntos canjeables por experiencias reales cuando dejas el móvil.",
    needs: "Acuerdos con marcas para premios, desarrollo gamificado y campaña en TikTok con influencers.",
    votes: 28,
    createdAt: "2026-04-08T16:00:00.000Z",
  },
  {
    id: "sample-4",
    team: "ComparteMesa",
    problem: "Miles de familias no pueden ofrecer una alimentación digna a sus hijos. Los bancos de alimentos no llegan a todos.",
    solution: "Plataforma que conecta restaurantes con excedente diario con familias vulnerables, con recogida en puntos seguros sin estigma.",
    needs: "Red de restaurantes colaboradores, logística de distribución y 3.000€ para la plataforma web.",
    votes: 22,
    createdAt: "2026-04-05T09:00:00.000Z",
  },
];

export const winners: Winner[] = [
  {
    position: 1,
    team: "NeuroPulse",
    project: "Red de microespacios de descanso mental en universidades",
    description: "Cabinas sensoriales en campus universitarios con sesiones guiadas de 10 min para gestionar ansiedad entre clases.",
    prize: "10.000€ + Collab con Ibai",
  },
  {
    position: 2,
    team: "CodeShield",
    project: "Extensión anti-bullying para redes sociales",
    description: "Plugin de navegador que filtra comentarios tóxicos en tiempo real y ofrece recursos de ayuda contextual.",
    prize: "5.000€ + Mentoría UNICEF",
  },
  {
    position: 3,
    team: "BrightStart",
    project: "Programa de becas-comedor gamificado",
    description: "App donde empresas patrocinan comidas escolares a cambio de visibilidad, con tracking de impacto transparente.",
    prize: "3.000€ + Visibilidad en RRSS",
  },
];
