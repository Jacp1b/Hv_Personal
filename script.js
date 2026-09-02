document.addEventListener('DOMContentLoaded', () => {

    // 1. FUNCIONALIDAD DE DESPLAZAMIENTO SUAVE (SMOOTH SCROLLING)
    // Seleccionamos todos los enlaces que empiezan con '#' (enlaces internos)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el salto brusco por defecto

            // Obtenemos el ID de la sección a la que queremos ir
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Hacemos scroll hacia el elemento con un comportamiento suave
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinea la sección al inicio de la pantalla
                });
            }
        });
    });

    // 2. FUNCIONALIDAD DEL FORMULARIO DE CONTACTO
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue al enviar

            // Obtenemos el valor del campo nombre para personalizar el mensaje
            const nombreInput = document.getElementById('nombre').value;
            const nombre = nombreInput ? nombreInput : 'Visitante';

            // Mostramos una alerta de éxito
            alert(`¡Gracias por tu mensaje, ${nombre}! Me pondré en contacto contigo muy pronto.`);

            // Limpiamos los campos del formulario
            contactForm.reset();
        });
    }

});