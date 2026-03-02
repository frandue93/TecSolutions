import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Obtiene todos los proyectos de la colección 'proyectos'
  const proyectos = await getCollection('proyectos');

  return rss({
    // Configuración general
    title: 'Proyectos y Casos de Estudio | Tu Consultora',
    description: 'Últimos casos de éxito y soluciones tecnológicas implementadas.',
    site: context.site, // Usa el dominio configurado
    
    // Mapea la colección a la estructura de items de RSS
    items: proyectos.map((proyecto) => ({
      title: proyecto.data.title,
      pubDate: proyecto.data.date,
      description: proyecto.data.description,
      // La URL completa del ítem
      link: `/proyectos/${proyecto.slug}`, 
    })),
    
    customData: `<language>es-es</language>`,
  });
}