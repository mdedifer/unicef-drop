# DROP — UNICEF Hackathon · Context Document

## Qué es DROP

Plataforma web con estética de **música electrónica dark/neón** donde jóvenes españoles de 16 a 30 años compiten lanzando soluciones a retos sociales de UNICEF, con influencers top de España como gancho principal y financiación real de los proyectos ganadores como premio.

---

## El Reto de UNICEF

> "¿Cómo podríamos diseñar una experiencia digital única para involucrar anualmente hasta 3.000 jóvenes (entre 18 y 30 años) en el diseño de soluciones (proyectos viables, sostenibles y escalables) a los principales desafíos de la infancia y adolescencia en España?"

Los 3 ejes temáticos:
- Salud mental
- Derechos digitales
- Pobreza infantil

---

## Concepto Central

### El "Drop"
Como cuando un DJ suelta un tema — UNICEF lanza un **Drop** (reto), los jóvenes responden con su solución. Funciona por **temporadas**, 2-3 Drops al año, generando picos de engagement masivo.

### Mecánica principal
1. Influencer anuncia el Drop en sus RRSS → tráfico a la plataforma
2. Jóvenes se registran y envían su propuesta (solo o en equipo)
3. La comunidad vota los proyectos (como un chart musical)
4. Los influencers amplifican los finalistas en sus canales
5. Jurado mixto (UNICEF + influencers) elige ganadores en directo
6. Ganadores reciben **financiación real** para ejecutar su idea + collab con el influencer

---

## Bloques del Concept Poster

### Bloque 2 — Elevator Pitch
> "UNICEF Drop: la plataforma donde los jóvenes españoles compiten para cambiar el mundo, con los creadores que ya siguen como jueces y sus propias ideas como entrada al escenario."

**Problema:** La participación juvenil en causas sociales es mínima porque los canales existentes son aburridos y no ofrecen nada tangible a cambio.
**Para quién:** Jóvenes de 16–30 en España que siguen a influencers y quieren impacto real, no solo likes.
**Diferencial:** Combina competición, cultura pop española y financiación real. No es voluntariado, es un reto con premio.

---

### Bloque 3 — Problemas que resuelve

1. **Los jóvenes quieren cambiar cosas, pero no saben cómo ni por dónde empezar.** Las causas sociales se comunican de forma densa e institucional. No existe un canal que traduzca "participación social" en algo concreto y accionable para un joven de 22 años.

2. **Las plataformas de participación juvenil no generan engagement real.** Firmar una petición no engancha. Los jóvenes están en TikTok, Twitch y YouTube. Las herramientas actuales de UNICEF no compiten con eso.

3. **Los proyectos juveniles mueren por falta de recursos y visibilidad.** Sin financiación, red ni altavoz, las ideas nunca llegan a ningún lado. El sistema premia a quien ya tiene contactos, no a quien tiene la mejor idea.

---

### Bloque 4 — Flujo de usuario

- **Paso 1:** Influencer anuncia el Drop en RRSS → usuario llega a la landing
- **Paso 2:** Registro rápido (Google/Instagram) + elige rol: solo o en equipo
- **Paso 3:** Canvas simplificado de 3 pasos para diseñar la propuesta
- **Paso 4:** Sube el pitch: texto + imagen/vídeo corto (máx. 2 min)
- **Paso 5:** Comunidad vota durante X días; influencers amplifican finalistas
- **Paso 6:** Jurado (UNICEF + influencers) elige ganadores en directo
- **Paso 7:** Ganadores reciben financiación + collab con influencer; empieza el siguiente Drop

---

### Bloque 5 — Riesgos

| Categoría | Riesgo | Mitigación |
|-----------|--------|------------|
| **Usuario** | Los jóvenes se registran pero no completan su propuesta por percibir el proceso como complejo | Canvas de 3 pasos máximo + opción de enviar idea en vídeo de 60 segundos |
| **Tecnología** | Pico masivo de tráfico cuando un influencer lanza el Drop puede tumbar la plataforma | Infraestructura escalable desde el inicio (Vercel + Supabase) + stress test antes de cada Drop |
| **Modelo** | Los influencers top no mantienen el compromiso más allá del anuncio inicial | Hitos contractuales concretos + posicionarlo como contenido de impacto para su marca personal |
| **Contexto** | Escándalo público de un influencer colaborador arrastra negativamente la imagen de la plataforma y UNICEF | Diversificar con 4-5 influencers por Drop + protocolo de desvinculación rápida preparado |

---

### Bloque 6 — Prototipo (MVP funcional — hoy, hackathon)

Prototipo funcional completo de la web app con estas pantallas:

1. **Landing del Drop** — Estética dark/neón, imagen/vídeo del influencer, explicación del reto activo, CTA "Participa ahora"
2. **Registro rápido** — Nombre + email (sin Auth externo para agilizar)
3. **Canvas de propuesta** — 3 campos: ¿Qué problema atacas? ¿Cuál es tu solución? ¿Qué necesitas para ejecutarla? + imagen
4. **Feed público de proyectos** — Listado con botón de voto (1 cuenta = 1 voto)
5. **Página de ganadores** — Sección que muestra el premio y el podio (puede ser ficticia para el prototipo)

---

### Bloque 7 — Segmentos de clientes

**Perfil 1 — El creativo con causa** (17 años, bachillerato)
Consume TikTok e Instagram, sigue influencers de cultura y lifestyle. Tiene opiniones sobre problemas sociales pero nunca ha tenido un canal real para actuar. Le motiva el reconocimiento y la visibilidad. Barrera: no se cree suficientemente "mayor" para proponer soluciones.

**Perfil 2 — El competitivo ambicioso** (19 años, universidad)
Vive los torneos y rankings online. Le engancha la mecánica de competición y conocer a sus ídolos más que la causa. Barrera: si el reto parece demasiado serio o académico, pasa de largo.

**Perfil 3 — El joven con propósito** (24 años, mundo laboral)
Ya tiene conciencia social, busca algo con más impacto que compartir posts. Le motiva que su idea reciba financiación real. Barrera: desconfianza en si UNICEF realmente ejecutará los proyectos ganadores.

---

### Bloque 8 — Recursos necesarios

- **Equipo:** Desarrolladores web (Next.js + Supabase), 1 diseñador dark/neón, 1 perfil de comunicación para influencers y RRSS
- **Tecnología:** Next.js + Supabase + Vercel + Cloudinary (imágenes) + Google Auth
- **Comunicación:** Acuerdo con al menos 2 influencers top (Ibai, TheGrefg...) + cuentas propias en TikTok e Instagram + vídeo de lanzamiento
- **Alianzas:** UNICEF España (validación + financiación de premios) + Avanade como sponsor tech + agencia de representación para acceder a influencers

**Mínimo viable para el primer piloto:** UNICEF como respaldo + 1 influencer comprometido + el prototipo funcionando.

---

### Bloque 9 — KPIs

1. **Jóvenes registrados por Drop** → Objetivo primer Drop: 500 · Objetivo escala: 3.000 anuales
2. **Tasa conversión registro → propuesta enviada** → Objetivo: ≥30%
3. **Votos emitidos por Drop** → Indicador de engagement de la comunidad
4. **Shares orgánicos en RRSS** → Indicador clave de viralidad
5. **Proyectos ganadores ejecutados** → KPI de impacto social real
6. **Retención entre Drops** → % usuarios que participan en más de una edición

---

### Bloque 10 — Roadmap

**Fase 1 — Validación** *(Meses 1-2, post-hackathon)*
Partiendo del concept poster y el prototipo ya construidos, presentar a UNICEF y Avanade para conseguir respaldo oficial. Cerrar acuerdo con al menos 1 influencer top. Testear el prototipo con usuarios reales.
→ **Objetivo:** Validar el concepto con partners reales y preparar el producto para el piloto.

**Fase 2 — Piloto** *(Meses 3-6)*
Convertir el prototipo en un producto estable. Lanzar el primer Drop oficial con 1 influencer activo y 1 reto real de UNICEF. Meta: 500 jóvenes registrados y 150 propuestas enviadas.
→ **Objetivo:** Aprender qué funciona, ajustar y financiar el primer proyecto ganador.

**Fase 3 — Lanzamiento** *(Meses 7-12)*
Incorporar 3-4 influencers adicionales. Lanzar 2-3 Drops con los 3 ejes de UNICEF: salud mental, derechos digitales y pobreza infantil. Activar comunidad entre Drops.
→ **Objetivo:** Alcanzar los 3.000 jóvenes anuales del reto de UNICEF.

---

### Bloque 11 — Nombre: DROP ✅

---

## Instrucciones para el Pre-MVP

### Stack
```
Next.js (App Router) + Tailwind CSS + localStorage (sin backend real)
```
Sin Supabase ni Auth externo para ir rápido. Es un prototipo.

### Estética — MUY IMPORTANTE
- **Tema:** Música electrónica — dark, neón, energético
- Fondo negro/muy oscuro (`#0a0a0a` o similar)
- Acentos neón: cian (`#00f5ff`), violeta (`#a855f7`), rosa (`#ff0080`)
- Tipografía display llamativa (no Inter, no Roboto). Buscar algo impactante tipo Bebas Neue, Orbitron, o similar
- Micro-animaciones: glows, pulsos, efectos de partículas si es posible
- Grid asimétrico, overlaps, elementos que rompan el layout convencional
- Sensación de festival / rave / escenario

### Páginas a construir
1. `/` — Landing con el Drop activo
2. `/participar` — Canvas de propuesta (3 campos + imagen)
3. `/proyectos` — Feed público con votación
4. `/ganadores` — Página de ganadores (ficticia pero visualmente impactante)

### Prompt inicial para Claude Code
```
Crea una web app en Next.js con App Router y Tailwind CSS llamada DROP.
Es una plataforma de UNICEF donde jóvenes españoles compiten enviando soluciones a retos sociales, con influencers top como Ibai y TheGrefg como embajadores.

Estética: música electrónica, dark/neón. Fondo muy oscuro (#0a0a0a), acentos neón cian y violeta, tipografía impactante tipo Orbitron o Bebas Neue, micro-animaciones con glow effects. Nada de diseño genérico, tiene que sentirse como un festival de música electrónica.

Páginas:
1. Landing (/) — Reto activo de UNICEF con cuenta atrás, foto del influencer embajador, CTA "Participa ahora"
2. Participar (/participar) — Formulario de 3 campos: "¿Qué problema atacas?", "¿Cuál es tu solución?", "¿Qué necesitas para ejecutarla?" + subida de imagen. Guardar en localStorage.
3. Proyectos (/proyectos) — Feed de proyectos enviados (leer de localStorage) con botón de voto
4. Ganadores (/ganadores) — Página ficticia pero impactante con el podio y los premios: financiación real + collab con influencer

Sin backend, sin Auth. Todo en localStorage. Desplegable en Vercel.
```

### Datos ficticios para el prototipo
- **Influencer embajador:** Ibai Llanos
- **Reto activo:** "Diseña una solución para mejorar la salud mental de los jóvenes en España"
- **Premio:** 10.000€ de financiación para ejecutar tu proyecto + collab con Ibai
- **Fecha límite del Drop:** 30 días desde hoy
- **Proyectos de ejemplo en el feed:** Crear 3-4 proyectos ficticios pregenerados para que el feed no esté vacío

---

## Resumen ejecutivo para la presentación

DROP es la única plataforma que traduce la participación juvenil en un formato que los jóvenes ya entienden: competición, influencers y premio real. No pedimos voluntariado — ofrecemos un escenario. Cada Drop es un festival donde la entrada es tu idea y el premio es verla hecha realidad.
