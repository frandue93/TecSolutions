import { z, defineCollection } from 'astro:content';


const proyectoCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().max(250),
        client: z.string(),
        date: z.date(),
        technologies: z.array(z.string()),
        isFeatured: z.boolean().optional(),
    }),
});

// 2. Exporta un objeto 'collections' para Astro
export const collections = {
    'proyectos': proyectoCollection,
};