;
((c => {
    c('*********** Programación Reactiva ************')
    
    const createUser = () => {
        let id = Math.floor( Math.random() * 10000 )
        users.push(id)
        c(`\nUsuario ${id} creado`)
    }

    const getUser = () => {
        c('Obteniendo usuarios...')
        c(`Usuarios: ${users} \n Total de usuarios: ${users.length} \n`)
    }

    setInterval( () => {
        createUser()
        getUser()
    }, 5000)

    setInterval( () => {
        createUser()
        getUser()
    }, 2500)

    let users = []
}))(console.log)