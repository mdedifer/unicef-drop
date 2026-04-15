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
