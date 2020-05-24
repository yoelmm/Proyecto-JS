// selecciono el elemento "form del template HTML" y login
let $form = document.querySelector("#form");
let $login = document.querySelector('#login');
// creo un nuevo elemento para agregar la opcion cerrar sesion
let cerrar_sesion = document.createElement('a');
// declaro las variables que recogeran el valor de los inputs (name,email,password) en html:
let $form_name = null;
let $form_email = null;
let $form_password = null;

// creo el evento submit para el formulario cuando se intente acceder a la sesion

$form.addEventListener('submit', () => {

    $form_name = document.querySelector("#form_name").value;
    $form_email = document.querySelector("#form_email").value;
    $form_password = document.querySelector("#form_password").value;

    // Procedo a guardar esta infomación del usuario en el localstorage
    // NOTA EL OBJETO LOCAL STORAGE PERMITE GUARDAR LA INFORMACIÓN EN EL NAVEGADOR
    // DE MANERA INDEFINIDA, ES DECIR, ASI SE CIERRE LA PAG WEB O SE APAGUE EL PORTATIL
    //ESTA INFORMACIO PERMANECE GUARDADA EN EL NAVEGADOR
    // *localStorage.setItem('name', $form_name);
    // *localStorage.setItem('email', $form_email);
    // *localStorage.setItem('password', $form_password);

    // EL OBJETO SESION STORAGE PERMITE ALMACENAR ESTA INFORMACION SOLAMENTE CUANDO SE MANTIENE LAS SESION
    // ES DECIR, AL CERRAR EL NAVEGADOR LA INFORMACIÓN SE BORRA AUTOMATICAMENTE

    sessionStorage.setItem('name', $form_name);
    sessionStorage.setItem('email', $form_email);
    sessionStorage.setItem('password', $form_password);
    // Procedo a mostrar un msj de bienvenida tras iniciar sesion
    // creo un elemento <h4> dentro del div con id=login
    let $h4 = document.createElement('h4');
    $h4.innerHTML = `Bienvenido ${$form_name}`;
    // Otra forma de indicar el texto que se quiere mostrar por pantalla es de la siguiente manera
    // let text_h4 = document.createTextNode('Bienvenido', $form_name);
    // * $h4.appendChild(text_h4);

    // otra forma de añdirle texto al elemento $h4 creado es:

    // * $h4.textContent = `Bienvenido ${$form_name}`;;

    // Ahora procedo a añadir ele elemento creado al formulario con id =login por medio del método append()
    // *document.querySelector('#login').append($h4); De este modo se añade el mensaje de bienvenida como el 
    // último elemento hijo del elemento padre= 'login'

    // Si lo queremos como el primer elemento hijo utilizamos el método insertBefore
    // el primer argumento indica el elemento que queremos insertar y el segundo se refiere antes de que elemento hijo se quiere insertar

    //* let $login = document.querySelector('#login');
    //* $login.insertBefore($h4, $login.firstChild);

    // el código anterior lo meto dentro de una función (authentic) que será llamada en el operador ternario de más abajo


    const authentic = () => {
        $login.insertBefore($h4, $login.firstChild);
        $form.style.display = 'none'; // con esta instruccion oculto el div de formulario tras iniciar sesion y dar el msj de bienvenida

    }

    //  A continuacion utilizo el operador ternario para ocultar el elemento form del template cuando
    // la sesió se haya realizado correctamente o arrojar un msj cuando suceda lo contrario por falta de un dato
    $form_name && $form_email && $form_password !== undefined || null ? authentic() :
        alert('Introduce los datos correctos, por favor');

    // Por ultimo faltar crear un enlace que permita cerrar sesión y volver al estado inicial de la página
    cerrar_sesion.innerHTML = "cerrar sesion";
    cerrar_sesion.setAttribute('href', '#');
    $login.appendChild(cerrar_sesion);


});

// creo el evento click para cerrar sesion
cerrar_sesion.addEventListener('click', () => {
    // con la siguiente instruccion se recarga la pag web 
    location.reload();
    //  procedo a eliminar los datos que se han guardado en el storage
    sessionStorage.clear();

})