;
((c) => {
    c('************* Programación Funcional ***********')
    // Función recursiva para obtener el factorial de un número
    // ( n! = producto de todos los numeros naturales desde 1 hasta n )
    const factorialImperativo = n => {
        let f = 1
        for ( i = 1; i <= n; i++ )
            f = f * i
            return f
    }

    c('Factorial:', factorialImperativo(5)  )

    const factorialDeclarativo = n => {
        return n === 0
            ? 1 // caso base
            : n * factorialDeclarativo( n - 1 )
    }
    c('Factorial Declarativo:', factorialDeclarativo(3)  )


    // Función recursiva para obtener la suma factorial de un número
    // ( n+! = sumatoria de todos los numeros naturales desde 1 hasta n)
    const sumaFactorial = n => {
        return n === 1
            ? 1 // caso base
            : n + sumaFactorial( n - 1 )
    }
    c('Sumatoria Factorial:', sumaFactorial(5)  )
    c('Sumatoria Factorial:', sumaFactorial(10)  )


    // Función recursiva para calcular la potencia de un número b elevado al exponente e
    // ( b elevado a e = se obtiene como el producto de b consigo mismo e veces )
    const pow = (b, e) => {
        return e === 1
            ? b // caso base
            : b * pow( b, e - 1 )
    }
    c( 'Potencia:', pow(2, 6), Math.pow(2, 6)  )
    c( 'Potencia:', pow(3, 6), Math.pow(3, 6)  )


    // Función recursiva para determinar si elemento está contenido dentro de un vector
    const existeEnVectorAux = ( vector, elemento, posicion ) => {
        return posicion > vector.length - 1
            ? false
            /*: ( vector[posicion] === elemento )
                ? true
                : existeEnVectorAux (vector, elemento, posicion + 1)*/
            // Con operador corto circuito
            : vector[posicion] === elemento || existeEnVectorAux (vector, elemento, posicion + 1)
    }

    const existeEnVector = ( vector, elemento ) => {
        return existeEnVectorAux ( vector, elemento, 0 )
    }
    c(
        '\nElemento dentro de vector:',
        existeEnVector( [1, 2, 3, 4, 5], 5 ), // true
        existeEnVector( [1, 2, 3, 4, 5], 6 ), // false
    )

    // Función recursiva para determinar si un elemento está repetido dentro de un vector


    // Función recursiva para determinar si un número es par o impar sin el uso del operador módulo


    // Función recursiva que sume los dígitos de un número
    // ( pe 125 = 1 + 2 + 5 = 8 )

    


})(console.log);