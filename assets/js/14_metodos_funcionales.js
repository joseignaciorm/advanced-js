;
((c) => {
    c('\n********* Métodos funcionales ES5 ***********')
    c('reduce')
    c( [1, 2, 3, 4, 5].reduce( (acumulado, elemento) => acumulado + elemento ) ) // 15
    c( [1, 2, 3, 4, 5].reduce( (acumulado, elemento) => acumulado * elemento ) ) // 120

    c('\nmap') // dado un arreglo, devuelve otro con la transformación ejecutada
    c( [1, 2, 3, 4, 5].map( elemento => elemento * elemento ) ) 
    c( [1, 2, 3, 4, 5].map( elemento => -elemento ) ) 

    c('\nfilter') 
    c( [1, 2, 3, 4, 5].filter( elemento => elemento % 2 === 0 ) ) 
    c( [1, 2, 3, 4, 5].filter( elemento => elemento % 2 === 1 ) ) 

})(console.log);