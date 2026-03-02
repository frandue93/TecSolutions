export interface Service {
  title: string;
  slug: string;
  image: string;
  short: string;
  full: string;
  bgSize?: string;
  bgPosition?: string;
}

export const services: Service[] = [
  {
    title: 'Desarrollo de Software a Medida',
    slug: 'desarrollo-software',
    image: '/images/desarrollo_a_medida.png',
    short: 'Creación de aplicaciones y plataformas a medida para optimizar procesos y escalar tu negocio.',
    full: 'Diseñamos y desarrollamos aplicaciones y plataformas de software únicas y escalables, creadas específicamente para resolver los retos operacionales de tu empresa B2B. Olvídate de las soluciones genéricas y optimiza tus flujos de trabajo con herramientas que impulsan la eficiencia, la productividad y garantizan la compatibilidad, preparándote para la transformación digital y el crecimiento sostenido.',
    bgSize: '60% auto, cover',
    bgPosition: 'center 0px, center center'
  },
  {
    title: 'Optimización Tecnológica',
    slug: 'optimizacion-tecnologica',
    image: '/images/optimizacion.png',
    short: 'Auditoría y reingeniería para mejorar rendimiento, reducir costes y modernizar infraestructuras.',
    full: 'Realizamos una auditoría exhaustiva de tu infraestructura tecnológica y reingeniamos tus arquitecturas de TI para eliminar cuellos de botella y reducir drásticamente los costes operativos. Garantizamos la máxima velocidad, rendimiento y fiabilidad de todos tus sistemas, asegurando que tu tecnología sea un motor de rentabilidad y no un centro de gasto. Mejora la latencia y la experiencia del usuario final.',
    bgSize: '60% auto, cover',
    bgPosition: 'center 0px, center center'
  },
  {
    title: 'Sistemas de Gestión (SGA/ERP)',
    slug: 'sistemas-gestion',
    image: '/images/erp.png',
    short: 'Implementación e integración de ERP/SGA para centralizar operaciones y mejorar la visibilidad de negocio.',
    full: 'Implementamos Sistemas de Gestión Empresarial (ERP) y Almacenes (SGA) robustos y totalmente integrados, unificando la logística, inventario, finanzas y recursos humanos en una sola plataforma. Obtén visibilidad total de tu cadena de suministro y toma decisiones basadas en datos en tiempo real, maximizando la eficiencia operativa y el control total de tu negocio B2B.',
    bgSize: '60% auto, cover',
    bgPosition: 'center 0px, center center'
  },
  {
    title: 'Inteligencia Artificial (IA)',
    slug: 'inteligencia-artificial',
    image: '/images/IA.png',
    short: 'Integración de modelos de IA y ML para predicción, automatización y análisis avanzado de datos.',
    full: 'Llevamos tu negocio al futuro integrando soluciones avanzadas de Inteligencia Artificial y Machine Learning. Implementamos modelos predictivos para la previsión de demanda, automatización de la toma de decisiones y análisis de datos a gran escala, permitiéndote identificar patrones ocultos, minimizar riesgos y obtener una ventaja competitiva decisiva en el mercado.',
    bgSize: '60% auto, cover',
    bgPosition: 'center 0px, center center'
  },
  {
    title: 'Automatización de Procesos (RPA)',
    slug: 'automatizacion-rpa',
    image: '/images/automatizacion.png',
    short: 'Automatizamos tareas repetitivas para reducir errores y liberar al equipo a actividades de mayor valor.',
    full: 'Diseñamos e implementamos la Automatización Robótica de Procesos (RPA) para digitalizar y ejecutar tareas administrativas repetitivas de alto volumen, como la entrada de datos, gestión de facturas o verificación de documentos. Reducimos el error humano a cero, aceleramos los ciclos de trabajo y liberamos a tu equipo para que se enfoque en tareas estratégicas de mayor valor e impacto.',
    bgSize: '60% auto, cover',
    bgPosition: 'center 0px, center center'
  },
  {
    title: 'Seguridad y Análisis de Datos',
    slug: 'seguridad-analisis-datos',
    image: '/images/seguridad.png',
    short: 'Ciberseguridad y analítica para proteger activos y convertir datos en decisiones accionables.',
    full: 'Protegemos los activos más valiosos de tu empresa con una estrategia integral de Ciberseguridad que incluye auditorías de vulnerabilidad, protección perimetral y planes de respuesta a incidentes. Combinamos esto con el Análisis Avanzado de Datos (Big Data) para transformar la información bruta en inteligencia de negocio estratégica, asegurando la continuidad y la toma de decisiones informada.',
    bgSize: '60% auto, cover',
    bgPosition: 'center 0px, center center'
  }
];
