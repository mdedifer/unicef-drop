# DROP — Contenido de la plataforma

## Qué es DROP

DROP es una plataforma web de UNICEF España donde jóvenes de 16 a 30 años compiten enviando soluciones a retos sociales reales. La mecánica se inspira en la cultura de la música electrónica: UNICEF "suelta un Drop" (lanza un reto), los jóvenes responden con sus ideas, la comunidad vota y los ganadores reciben financiación real para ejecutar su proyecto.

La plataforma conecta tres mundos que normalmente no se tocan: causas sociales de UNICEF, influencers top de España y la creatividad de los jóvenes.

---

## Estructura de la plataforma

### 1. Landing — La portada del festival

La primera pantalla muestra el logo de UNICEF en grande y el nombre DROP. El mensaje principal es claro: "La plataforma de UNICEF donde los jóvenes españoles compiten para cambiar el mundo, con los creadores que ya siguen como embajadores y financiación real como premio."

Se muestran tres cifras de un vistazo: 3 drops activos, 655+ jóvenes participando y 26.000€ en premios.

A continuación, una sección explica qué es DROP y cómo funciona en tres pasos:
1. UNICEF lanza un Drop — un reto social real con un influencer como embajador
2. Tú propones la solución — canvas de 3 preguntas, solo o en equipo, sin burocracia
3. Los mejores ganan — la comunidad vota, el jurado decide, los ganadores reciben financiación + colaboración con el embajador

### 2. Los tres Drops activos

La plataforma muestra tres retos simultáneos, cada uno con su propio embajador, premio y fecha límite:

**Drop 1 — Salud Mental**
- Reto: "Diseña una solución para mejorar la salud mental de los jóvenes en España"
- Embajador: Ibai Llanos
- Premio: 10.000€ + colaboración con Ibai
- 312 participantes, 87 propuestas

**Drop 2 — Derechos Digitales**
- Reto: "Crea una herramienta para proteger a los jóvenes del ciberacoso y la adicción digital"
- Embajador: TheGrefg
- Premio: 8.000€ + colaboración con TheGrefg
- 198 participantes, 54 propuestas

**Drop 3 — Pobreza Infantil**
- Reto: "Propón una solución para reducir la pobreza infantil en los barrios más vulnerables de España"
- Embajadora: Lola Lolita
- Premio: 8.000€ + colaboración con Lola Lolita
- 145 participantes, 31 propuestas

Cada tarjeta de Drop muestra la foto del influencer embajador, las estadísticas de participación, el premio y una cuenta atrás en tiempo real hasta la fecha límite.

### 3. Sección UNICEF

Una sección dedicada refuerza que DROP es una iniciativa de UNICEF España, nacida del reto de involucrar a 3.000 jóvenes al año en soluciones a los desafíos de la infancia. Se muestran tres datos: 3.000 jóvenes al año (objetivo UNICEF), rango de edad 16-30, y 100% de financiación real para los proyectos ganadores.

### 4. Participar — Registro y panel de usuario

**Registro:** Los jóvenes crean cuenta con nombre, email y contraseña. Acceso instantáneo.

**Panel de usuario:** Tras registrarse, cada participante tiene su propio panel donde:
- Ve un saludo personalizado
- Puede crear nuevas propuestas eligiendo a qué Drop quiere participar
- Ve el estado de sus borradores (en qué fase están) y puede continuar donde lo dejó
- Ve sus propuestas ya enviadas con acceso directo al feed público

### 5. Design Thinking Wizard — Las 5 fases de la propuesta

En lugar de un formulario genérico, la plataforma guía a los jóvenes con la metodología Design Thinking en 5 fases. Cada fase incluye una explicación clara, una pregunta guía, un consejo práctico y un campo de trabajo:

**Fase 1 — Empatizar**
"¿A quién afecta este problema?"
Se pide al joven que se ponga en la piel de las personas afectadas: quiénes son, qué sienten, qué viven a diario. Consejo: "Habla con personas reales que sufran este problema. Observa, escucha, no asumas."

**Fase 2 — Definir**
"¿Cuál es el problema concreto?"
Definir el problema de forma específica. Consejo: "Usa la fórmula: [Persona] necesita [necesidad] porque [insight]."

**Fase 3 — Idear**
"¿Cuál es tu solución?"
Describir la idea y lo que la hace diferente. Se puede subir una imagen. Consejo: "Piensa en cómo se lo explicarías a un amigo en 30 segundos."

**Fase 4 — Prototipar**
"¿Cómo lo llevarías a la práctica?"
Pasos concretos para hacerlo realidad. Consejo: "Piensa en el mínimo viable: la versión más simple que puedes probar en una semana."

**Fase 5 — Testar**
"¿Qué necesitas para validarlo?"
Recursos, equipo, financiación y métricas de éxito. Consejo: "Sé realista con lo que pides y claro con lo que conseguirás a cambio."

El wizard tiene una barra de progreso visual, navegación libre entre fases, autoguardado de borradores y la opción de guardar y volver más tarde.

### 6. Proyectos — El feed público

Todos los proyectos enviados aparecen en un feed público ordenado por votos. Cada tarjeta muestra:
- Nombre del equipo
- El problema que atacan
- Su solución
- Lo que necesitan para ejecutarla
- Imagen (si la subieron)
- Contador de votos con botón para votar

Cada usuario registrado puede votar una vez por proyecto. Los usuarios no registrados ven los proyectos pero no pueden votar.

### 7. Premios

La página de premios detalla qué se gana:

**Premio principal por Drop:** 10.000€ de financiación para ejecutar el proyecto, más colaboración con el embajador, visibilidad en RRSS y mentoría de UNICEF.

**Desglose por posición:**
- 1er puesto: 10.000€ + collab con embajador + mentoría UNICEF + visibilidad RRSS
- 2do puesto: 5.000€ + mentoría UNICEF + visibilidad RRSS
- 3er puesto: 3.000€ + certificado UNICEF + visibilidad RRSS

También muestra los premios específicos de cada Drop con la foto del embajador correspondiente.

---

## Estética y experiencia

La plataforma tiene una estética de festival de música electrónica: fondo negro, acentos neón en cian, violeta y rosa, tipografía impactante (Orbitron), efectos de brillo, animaciones suaves y una sensación general de energía y modernidad. No se parece a ninguna web institucional. Se siente como un evento al que quieres entrar.

---

## Datos de la plataforma

- Persistencia real con Supabase (base de datos PostgreSQL)
- Autenticación con email y contraseña
- Los datos son compartidos entre todos los usuarios y dispositivos
- Los votos son únicos por usuario y proyecto
- Los borradores se guardan automáticamente y se pueden retomar
- Desplegada en Vercel: https://unicef-drop.vercel.app
