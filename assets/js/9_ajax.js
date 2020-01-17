;
((c, d, ajax) => {
    const READY_STATE_COMPLETE = 4,
        OK = 200,
        NOT_FOUND = 404,
        preload = d.querySelector('#preload'),
        country = d.querySelector('#country'),
        menu = d.querySelector('.menu')

    function countryInfo () {
        preload.innerHTML = '<i class="fa fa-refresh fa-spin fa-5x"></i>'

        if (ajax.readyState === READY_STATE_COMPLETE && ajax.status === OK) {
            c(ajax)
            preload.innerHTML = ''
            country.innerHTML = ajax.response
        } else if ( ajax.status === NOT_FOUND ) {
            preload.innerHTML = ''
            country.innerHTML = `El servidor no responde. Error No. ${ajax.status} : <mark>${ajax.statusText}</mark>`
        }
    }

    function ajaxRequest (e) {
        e.preventDefault()
        if(e.target.localName == 'a') {
            ajax.open('GET', e.target.href, true) // Abre la petición AJAX. Parámetros: open(METHOD, URL, true para indicar que la petición es Asyncrona)
            ajax.addEventListener('readystatechange', countryInfo) // Evento de AJAX a trabajar
            ajax.setRequestHeader('content-type', 'text/html') // Opcional para configuraciones de la cabecera
            ajax.send() // Envía la petición
        }
    }
        menu.addEventListener('click', ajaxRequest)

})(console.log, document, new XMLHttpRequest());