// Esta es una forma de cambiar la imagen de fondo de la web, pero no es la más eficiente
// porque se acceder muchas veces al DOM

let theme_red = document.getElementById("color-red");
let theme_green = document.getElementById("color-green");
let theme_blue = document.getElementById("color-blue");
let $body = document.querySelector("body");

const theme_to_red = () => {

    $body.setAttribute("id", "theme_red_change");
};
const theme_to_green = () => {

    $body.setAttribute("id", "theme_green_change");
};
const theme_to_blue = () => {

    $body.setAttribute("id", "theme_blue_change");
};
theme_red.addEventListener('click', () => { theme_to_red() });
theme_green.addEventListener('click', () => { theme_to_green() });
theme_blue.addEventListener('click', () => { theme_to_blue() });