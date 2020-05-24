    let $reloj = document.querySelector('#reloj');
    const datos = () => {
        let date = new Date();
        let reloj = {
            hora: date.getHours(),
            min: date.getMinutes(),
            seg: date.getSeconds()
        }
        let second = null;
        reloj.seg < 10 ? second = "0" + reloj.seg : second = reloj.seg;
        let imprimir_hora = reloj.hora + ":" + reloj.min + ":" + second;
        $reloj.innerHTML = imprimir_hora;
        // el settimeout ejecuta el código de adentro : la función datos() cada 1seg
        setTimeout(() => {
            datos();
        }, 1000);
    };

    datos();