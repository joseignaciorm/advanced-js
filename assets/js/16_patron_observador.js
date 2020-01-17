;
((c => {
    c('*********** Patrón Observador *************')
    // Creamos clase clcik que representa al sujeto observable (Publicador)

    // clickHandler es la función obsevadora (Sub). Este controlador suscribe y cancela la observación, adicionalmente dispara los eventos para visualizar las notificaciones de los mismos.

    // Log - Clase auxiliar que recoje y muestra los resultados.
    
    // Creamos clase log de logger para ir mandando a consola las publicaciones del evento click
    class Click {
        constructor () {
            this.handlers = [] // Arreglo para guardar los manejadores
        }

        // Métodos
        subscribe (fn) {
            this.handlers.push(fn)
        }

        unSubscribe (fn) {
            this.handlers = this.handlers.filter( item => (item !== fn) ? item : false)
        }

        fire (msg) { // Disparador de mensajes. Recoje manejador de suscriptores
            this.handlers.forEach( item => item(msg) )
        }

    }


    // Creamos un objeto de tipo click que es igual a una istancia de Click
    class Log {
        constructor () {
            this.log = ''
        }

        // Métodos
        add (msg) {
            this.log += `${msg}\n` // Concatenamos los mensajes recibidos
        }

        show () {
            c(this.log)
            this.log = ''
        }

    }

    const click = new Click(),
        clickHandler = item => log.add(`Dispara: ${item}`),
        log = new Log()

        // click - Método subseptible a observación
        click.subscribe(clickHandler)
        click.fire('seguidor 1')
        click.unSubscribe(clickHandler)
        click.fire('seguidor 2')
        click.subscribe(clickHandler)
        click.fire('seguidor 3')

        log.show()

}))(console.log);


((c => {
// Simulador de videojuego de peleas. King of fighthers
// Clase Pub que se va a estar observando
class Player {
    constructor () {
        this.players = []
    }

    add (play) {
        this.players.push(play)
    }

    notify (obj) { // Recibe un objeto para notificar, round, ganador y el perdedor
        this.players.forEach( play => play(obj) ) // player() va a ser una función que va a ejecutar en este caso el objeto que regresa
    }
}

// Sub
class Fight { // Clase que va a estar ejecutando todas esas observaciones
    constructor (fighter1, fighter2) {
        this.player = new Player() // observable va a ser un nuevo observador
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.round = 1 // Para empezar en el rpund 1
    }

    readyGo () {
        let match = {}

        // Para saber cual es el ganador y el perdedor: Ejecutamos un número random
        if ( Math.floor( (Math.random() * 2) + 1 ) === 1 ) {
            match = {
                winner : this.fighter1,
                looser : this.fighter2
            }
        } else {
            match = {
                winner : this.fighter2,
                looser : this.fighter1
            }
        }

        match.round = this.round
        this.round++

        // A continuación mandamos la notificación
        this.player.notify(match) // El jugador notifica el encuentro
    }
}

// Empezamos a delcarar objeto de tipo pelea
let kof = new Fight('Kyo', 'Iori')
    kof.player.add( obj => c(`Round: ${obj.round} \n Ganador: ${obj.winner} \n Perdedor: ${obj.looser} \ln`) )
    kof.readyGo()
    kof.readyGo()
    kof.readyGo()
}))(console.log)


