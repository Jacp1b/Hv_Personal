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
});

function modoOsc() {
    const esOscuro = document.body.classList.toggle('ModoOsc');
    document.getElementById('btnModoOsc').textContent = esOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
}
function msjContac(){
     alert("Gracias por contactarme");
}

function msjLkn(){
    alert ("Redirigiendo a Linkedin");
}

function msjProy(){
    alert ("Proyecto Disponible en GitHub");
}