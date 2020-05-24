let $subir = document.querySelector('#subir');
// con la siguiente instruccion se imprime por consola el desplazamiento  de la pagina
// con un valor igual a cero (0) porque se encuentra en la parte superior
// console.log(document.documentElement.scrollTop);
function topFunction() {
    // document.body.scrollTop = 0;
    // la propiedad document element es utilizado para  conocer propiedades del navegador, por ejemplo
    //  altura, ancho, scroll(desplazamiento realizado desde la parte superior de la pag), etc
    // Esta propiedad es de solo lectura

    // En la siguiente instruccion se accede al valor del desplazamiento de la pag realizado desde la 
    // la parte superior y se le asigna el 0 para que retorne a la parte superior de nuevo
    document.documentElement.scrollTop = 0;

}


$subir.addEventListener('click', () => {
    topFunction();
});