let articles = [{
        title: "prueba de titulo 1",
        fecha: new Date(),
        contenido: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
    {
        title: "prueba de titulo 2",
        fecha: new Date(),
        contenido: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },

    {
        title: "prueba de titulo 3",
        fecha: new Date(),
        contenido: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
    },
];

articles.forEach((value, index) => {
    let $article = document.querySelector("article");
    let $h2 = document.createElement("h2");
    let $span = document.createElement("span");
    let $p = document.createElement("p");

    $h2.innerHTML = value.title;
    $span.innerHTML = value.fecha;
    $p.innerHTML = value.contenido;
    // $p.setAttribute("id", "yoel"); no hace falta agregarle el atributo ('id') porque por defecto reconoce el estilo asignado al elemento h2
    $article.appendChild($h2);
    $article.appendChild($span);
    $article.appendChild($p);


})