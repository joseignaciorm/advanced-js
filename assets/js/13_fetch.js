;((c, d) => {
    const respuestaFetch = d.querySelector('#fetch')
          let tpl = ''

    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then( response => response.json() )
    .then( albums =>  {

        c(albums)
        albums.forEach( element => {
                tpl += `<a href="${element.url}"><img src="${element.thumbnailUrl}"/>${element.id}</a>`
        })
        
            respuestaFetch.innerHTML = tpl

    })
    .catch( err => c(err.message) )

})(console.log, document);


;((c, d) => {
    const img = d.querySelector('#fetch-img')

    fetch('./assets/img/js-logo.png')
    .then( response => response.blob() )
    .then( blob =>  {

        c(blob) // Objeto blob = { size: 27814, type: "image/png" }
        // Para inyectar imágen en el DOM hay que convertir el objeto blob en un objeto que pueda leer la url, que se pueda inyectar al DOM
        // Para ello creamos un objeto que cuelga de URL.createObjectURL(blob) de ese objeto blob se pueda generar un objeto que pueda leer la url
        let objectURL = URL.createObjectURL(blob)
        c(objectURL)
        img.src = objectURL
        img.style.maxWidth = '300px'


    })
    .catch( err => c(err.message) )

})(console.log, document);