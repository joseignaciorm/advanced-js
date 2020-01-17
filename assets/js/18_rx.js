;
((c => {
    c('*********** Programación Reactiva con RXJS ************')
    
    const createUser = () => {
        let id = Math.floor( Math.random() * 10000 )
        users.push(id)
        c(`\nUsuario ${id} creado`)
    }

    const getUsers = () => {
        c('Obteniendo usuarios...')
        c(`Usuarios: ${users} \n Total de usuarios: ${users.length} \n`)
    }

    let users = [],
        pub = Rx.Observable.create( user => {
            setInterval( () => {
                user.next( getUsers() )
                user.next( getUsers() )
                user.next( getUsers() )
            }, 2500)
        })
    
        pub.subscribe( () => createUser() )

}))(console.log)