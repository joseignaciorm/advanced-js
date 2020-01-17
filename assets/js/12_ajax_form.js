;((c, d, ajax) => {
    const READY_STATE_COMPLETE = 4,
        OK = 200,
        NOT_FOUND = 404,
        form = d.forms[0], // Los formularios se guardan en un objeto padre llamado "form" del document
        preload = d.querySelector('.preload'),
        message = d.querySelector('.message')

        form.addEventListener('submit', e => {
            e.preventDefault()
            let formElements = d.querySelectorAll('[required]'),
                formData = ''
            ajax.open('POST', './assets/send_mail.php', true) 
            ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            ajax.addEventListener('load', e => {
                preload.classList.remove('hidden')
                if( ajax.readyState === READY_STATE_COMPLETE ) {
                    preload.classList.add('hidden')
                    message.classList.remove('hidden')

                    if ( ajax.status === OK ) {
                        message.innerHTML = ajax.response
                        form.reset() // Para resetear el formulario
                    } else if ( ajax.status === NOT_FOUND ) {
                        message.innerHTML = `<b>El servidor no responde. Error No. ${ajax.status} : <mark>${ajax.statusText}</mark></b>`
                    }
                }
            })

            formElements.forEach( input => formData += `${input.name}=${input.value}&` )
            c(formData)
            ajax.send(encodeURI(formData))
        })

})(console.log, document, new XMLHttpRequest());