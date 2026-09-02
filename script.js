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


function cambiarTexto() {
    let texto = document.getElementById("textoSobreMi");
    let contenidoActual = texto.textContent.trim();
    let textoOriginal = "Tecnologo en Analisis y Desarrollo de Software (ADSO) con sólida formación en el ciclo de vida del desarrollo de sistemas, levantamiento de requerimientos y maquetación web. Experiencia práctica en la creación de aplicaciones funcionales, modelado de bases de datos y desarrollo backend (Java, MySQL). Apasionado por la resolucion de problemas tecnicos, el trabajo bajo metodologías ágiles como Scrum y la entrega de codigo estructurado y mantenible.";
    let textoSegundo = "A lo largo de mi formación académica y proyectos practicos, he enfocado mis esfuerzos en construir soluciones robustas y escalables. Me apasiona entender los requerimientos del negocio para traducirlos en bases de datos eficientes y lógica de backend sólida, asegurando siempre buenas prácticas de desarrollo y control de versiones.";
    let textoTercero = "Ademas, me entusiasma seguir aprendiendo constantemente sobre nuevas tendencias tecnologicas, participar en equipos colaborativos y aportar valor real en proyectos donde la innovación, la adaptabilidad y el código limpio sean los verdaderos protagonistas. 🚀";

    if (contenidoActual === textoOriginal) {
        texto.textContent = textoSegundo;
    } 
    else if (contenidoActual === textoSegundo) {
        texto.textContent = textoTercero;
    } 
    else {
        texto.textContent = textoOriginal;
    }
}