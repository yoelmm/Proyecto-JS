//  Para desarrollar esta funcionalidad utilizamos la propiedad classList
// La propiedad .classList nos ofrece la manera idónea de trabajar con clases ya que permite realizar una serie de operaciones muy comunes:

// elemento.classList.contains('🍓fresa') — nos indica si el elemento contiene la clase 'fresa'
// elemento.classList.add('🍇uva') — añade la clase 'uva' si no estaba ya presente
// elemento.classList.remove('🍐pera') — borra la clase 'pera' si la tenía puesta
// elemento.classList.toggle('🍓fresa') — añade la clase 'fresa' si no estaba o la borra si estaba.
// elemento.classList.toggle('🍓fresa', false) — equivalente al método remove
// elemento.classList.toggle('🍓fresa', true) — equivalente al método add
// elemento.classList.replace('🥝kiwi', '🍊naranja') — reemplaza la clase 'kiwi' por la clase 'naranja'

// selecciono el elemento button con class=accordion de HTML
let $accordion = document.getElementsByClassName('accordion');
// Ahora recorro todas las clases con nombre 'accordion' del HTML, ya que estan asociadas con los botones
// del menu tipo acordeon

for (let i of $accordion) {
    i.addEventListener("click", () => {

        // nextElementSibling devuelve el elemento que sigue inmediatamente al elemento especificado, en el mismo nivel de árbol.
        //    en este caso devuelve el elemento <p> que contiene el texto a mostrar u ocultar

        let panel = i.nextElementSibling;

        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        i.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        // utilizo el operador ternario para definir en que condiciones habilitar o deshabilitar la visibilidad del elemento <p>
        panel.style.display === 'none' ? panel.style.display = 'block' : panel.style.display = 'none';

    });
}