// src/pages/api/contact.ts
import type { APIRoute } from 'astro';

const CONTACT_RECIPIENT_EMAIL = 'techsolutionsalfaro@gmail.com';

export const POST: APIRoute = async ({ request, redirect }) => {
    // 1. Validar el método (siempre POST para formularios)
    if (request.method !== 'POST') {
        return new Response("Método no permitido.", { status: 405 });
    }

    try {
        // 2. Obtener los datos del formulario
        const data = await request.formData();
        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        // 3. Validación básica (deberías hacer una validación más robusta)
        if (!name || !email || !message) {
            return new Response("Todos los campos son obligatorios.", { status: 400 });
        }

        // 4. Integración con Servicio de Email (Aquí usarías una librería o una API)
        // Por ejemplo, usando Fetch para enviar a un servicio como Resend o SendGrid:
        
        console.log(`--- NUEVO CONTACTO ---`);
        console.log(`Nombre: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Mensaje: ${message}`);
        console.log(`Destinatario configurado: ${CONTACT_RECIPIENT_EMAIL}`);
        
        // **!!! IMPORTANTE !!!**
        // Aquí iría el código real para enviar el email. 
        // Por ejemplo: await sendEmailService.send({ to: CONTACT_RECIPIENT_EMAIL, subject: 'Nueva Solicitud', body: message });
        
        // 5. Redireccionar al usuario a una página de agradecimiento
        // 303 See Other es el código estándar después de un POST exitoso.
        return redirect('/gracias', 303); 

    } catch (error) {
        console.error("Error al procesar el formulario:", error);
        return new Response("Error interno del servidor al procesar su solicitud.", { status: 500 });
    }
};

// Puedes añadir una función GET si quisieras que la ruta /api/contact respondiera a GET, pero no es necesario para el formulario.
export const GET: APIRoute = async () => {
    return new Response(JSON.stringify({ message: "Endpoint de contacto activo." }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
    });
};