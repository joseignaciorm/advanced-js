;
((c, d, ajax, j) => {
    const starwars = d.querySelector('#starwars'),  
            pagination = d.querySelector('#pagination')

    function loadCharacter (startList) {
        let starwarsInfo,
            starwarsTemplate = ''
        if( ajax.status >= 200 && ajax.status < 400 ) {
            starwarsInfo = j.parse(ajax.responseText)
            c(starwarsInfo)
            starwarsTemplate = `
                <h3>Personajes de Starwars encontrados: ${starwarsInfo.count}</h3>
                <ol start="${startList}">
                `
                starwarsInfo['results'].forEach( people => starwarsTemplate += `<li>${people.name}</li>`) 
            starwarsTemplate += `
                </ol">
                <nav id="pagination">
                    <a href="${starwarsInfo.previous}" id="previous">atras</a>
                    <a href="${starwarsInfo.next}" id="next">siguiente</a>
                </nav>
                `
        } else {
            starwarsTemplate = `<b>El servidor no responde. Error No. ${ajax.status} : <mark>${ajax.statusText}</mark></b>`
        }
        starwars.innerHTML = starwarsTemplate
    }

    // Hacer que esta función cargue despues que cargue el documento
    d.addEventListener('DOMContentLoaded', e => { // Document ready al estilo vanilla js
        ajax.open('GET', 'https://swapi.co/api/people/', true)
        ajax.addEventListener( 'load', loadCharacter )
        ajax.send()
    })

    //  En la primera carga hemos generado elementos del DOM que no existían como los enlaces "atras y siguiente"
    // Entonces hacemos una delegación del click a esos elementos generados asíncronamente con AJAX
    d.addEventListener('click', e => {
        e.preventDefault()
        let startList = ( e.target.search.slice(-1) -1 ) * 10 + 1
        c(startList)
        if ( e.target.localName == "a" && e.target.href.indexOf('null') === -1) {
            ajax.open('GET', e.target.href || 'https://swapi.co/api/people/', true) // Operador corto circuito en segundo paramentro. Sin en e.target.href no hay nada, entonces que cargue la primera página
            ajax.addEventListener( 'load', () => loadCharacter(startList) )
            ajax.send()
        }
    })
         
})(console.log, document, new XMLHttpRequest(), JSON);