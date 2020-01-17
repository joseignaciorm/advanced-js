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
    c('Factorial imperativo:', factorialImperativo(5)  )

    const factorialDeclarativo = n => {
        return n === 0
            ? 1 // caso base
            : n * factorialDeclarativo( n - 1 )
    }
    c('Factorial Declarativo:', factorialDeclarativo(3)  )
    c('\n')


    // Función recursiva para obtener la suma factorial de un número
    // ( n+! = sumatoria de todos los numeros naturales desde 1 hasta n)
    const sumaFactorial = n => {
        return n === 1
            ? 1 // caso base
            : n + sumaFactorial( n - 1 )
    }
    c('Sumatoria Factorial:', sumaFactorial(5)  )
    c('Sumatoria Factorial:', sumaFactorial(10)  )
    c('\n')


    // Función recursiva para calcular la potencia de un número b elevado al exponente e
    // ( b elevado a e = se obtiene como el producto de b consigo mismo e veces )
    const pow = (b, e) => {
        return e === 1
            ? b // caso base
            : b * pow( b, e - 1 )
    }
    c( 'Potencia:', pow(2, 6), Math.pow(2, 6)  )
    c( 'Potencia:', pow(3, 6), Math.pow(3, 6)  )
    c('\n')


    // Función recursiva para determinar si elemento está contenido dentro de un vector
    const existeEnVectorAux = ( vector, elemento, posicion ) => {
        return posicion > vector.length - 1
            ? false
            /*: ( vector[posicion] === elemento )
                ? true
                : existeEnVectorAux (vector, elemento, posicion + 1)*/
            // Con operador corto circuito
            /*
                Cortocircuito OR - cuando el valor en la expresión siempre pueda evaluar a true, es el valor que se cargará por defecto.

                Cortocircuito AND - cuando el valor en la expresión siempre pueda evaluar a false, es el valor que se cargará por defecto.
            */
            : vector[posicion] === elemento || existeEnVectorAux (vector, elemento, posicion + 1)
    }

    const existeEnVector = ( vector, elemento ) => {
        return existeEnVectorAux ( vector, elemento, 0 )
    }
    c(
        'Elemento dentro de vector:',
        existeEnVector( [1, 2, 3, 4, 5], 5 ), // true
        existeEnVector( [1, 2, 3, 4, 5], 6 ), // false
        '\n'
    )

    // Función recursiva para determinar si un elemento está repetido dentro de un vector
    c('\n')
    const repetidoEnVectorAux = ( vector, posicion ) => {
        return vector[posicion] > vector.length - 1
            ? false // No se encontro valor repetido
            : existeEnVectorAux( vector, vector[posicion], posicion + 1 ) || repetidoEnVectorAux( vector, posicion + 1 )

    }

    const repetidoEnVector = vector => {
        return repetidoEnVectorAux( vector, 0 )
    }
    c(
        'Elementos repetidos dentro de un vector:',
        repetidoEnVector( [1, 2, 3, 4, 5] ), // false
        repetidoEnVector( [1, 2, 3, 4, 2] ), // true se repite el número 3
        '\n'
    )

    // Función recursiva para determinar si un número es par o impar sin el uso del operador módulo.
    const even = n => {
        return n === 0 // Es par
            ? true
            : n === 1 // No es par
                ? false
                : odd ( n - 1 )
    }

    const odd = n => {
        return n === 0 // Es impar
            ? false
            : n === 1 // No es impar
                ? true
                : even ( n - 1 )
    }
    c(
        '\nEs par / Es impar\n',
        5, even(5), odd(5), // false - true
        '\n',
        6, even(6), odd(6), // true - false
        '\n\n'
            )
    


    // Función recursiva que sume los dígitos de un número
    // ( pe 125 = 1 + 2 + 5 = 8 )
    const sumaDigitos = n => {
        return n < 10
            ? n
            : n % 10 + sumaDigitos (Math.floor( n / 10 ))
    }
    c('Suma de dígitos de un número: \n',
        sumaDigitos(5), // 5
        sumaDigitos(25), // 7
        sumaDigitos(125), // 8
        sumaDigitos(5125), // 13
        sumaDigitos(55125), // 18
        '\n'
    )
    c('\n')

    


})(console.log);