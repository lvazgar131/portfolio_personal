const seccion_contacto = document.getElementById("contacto");
const pop_up = document.getElementById("pop_up");

const observador = new IntersectionObserver((raton_encima) => {
    raton_encima.forEach(entrada => {
        if(entrada.isIntersecting) {
            pop_up.style.display = "block";
            observador.disconnect();
        };
    });
}, {
    threshold:0.5
});

observador.observe(seccion_contacto);
function cerrar_pop_up() {
    pop_up.style.display = "none";
}