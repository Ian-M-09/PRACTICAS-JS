// EXCEPCION

let myobject

//consle.log(myobject.email) esto produce un error 


//-CAPTURA DE ERRORES-
//TRY CATCH

try {// en esta parte esta el codigo que intenta ejecutar
    console.log(myobject.email) // esto produce un error, pero no detiene la ejecucion del programa, ya que el error es manejado por el bloque catch, que captura el error y lo maneja de la manera que queramos, en este caso mostrando un mensaje en la consola
    console.log("Este mensaje no se muestra en la consola, ya que el error se produce antes de esta linea, y el bloque catch captura el error y maneja la excepcion, por lo que el programa no se detiene y sigue ejecutandose normalmente")
} catch {//si no lo puede ejecutar se va por este lado, y se ejecuta el codigo que esta dentro del bloque catch, que es el codigo que maneja el error
    console.log("se produjo un error, pero el programa no se detuvo, ya que el error fue manejado por el bloque catch")
}
console.log()
try {// en esta parte esta el codigo que intenta ejecutar
    console.log(myobject.email) // esto produce un error, pero no detiene la ejecucion del programa, ya que el error es manejado por el bloque catch, que captura el error y lo maneja de la manera que queramos, en este caso mostrando un mensaje en la consola
    console.log("Este mensaje no se muestra en la consola, ya que el error se produce antes de esta linea, y el bloque catch captura el error y maneja la excepcion, por lo que el programa no se detiene y sigue ejecutandose normalmente")
} catch (error) {//si no lo puede ejecutar se va por este lado, y se ejecuta el codigo que esta dentro del bloque catch, que es el codigo que maneja el error
    console.log("se produjo un error, pero el programa no se detuvo, ya que el error fue manejado por el bloque catch",error.message) // el bloque catch puede recibir un parametro, que es el error que se produjo, y se puede usar ese parametro para mostrar informacion sobre el error en la consola, como el mensaje de error, la pila de llamadas, etc.
}//.message es una propiedad del objeto error que contiene el mensaje de error que se produjo, y se puede mostrar en la consola para tener mas informacion sobre el error que se produjo
console.log()
//FINALLY

try {// en esta parte esta el codigo que intenta ejecutar
    console.log(myobject.email) // esto produce un error, pero no detiene la ejecucion del programa, ya que el error es manejado por el bloque catch, que captura el error y lo maneja de la manera que queramos, en este caso mostrando un mensaje en la consola
    console.log("Este mensaje no se muestra en la consola, ya que el error se produce antes de esta linea, y el bloque catch captura el error y maneja la excepcion, por lo que el programa no se detiene y sigue ejecutandose normalmente")
} catch {//si no lo puede ejecutar se va por este lado, y se ejecuta el codigo que esta dentro del bloque catch, que es el codigo que maneja el error
    console.log("se produjo un error, pero el programa no se detuvo, ya que el error fue manejado por el bloque catch")
} finally {// el bloque finally es un bloque opcional que se ejecuta siempre, independientemente de si se produjo un error o no, y se ejecuta despues del bloque try y del bloque catch, y se puede usar para ejecutar codigo que debe ejecutarse siempre, como cerrar conexiones a bases de datos, liberar recursos, etc.
    console.log("este mensaje se muestra en la consola siempre, ya que el bloque finally se ejecuta siempre, independientemente de si se produjo un error o no")
}
console.log()
//-LANZAMIENTO DE ERRORES-

//throw

function sumar(a,b){
    if(typeof a !== "number" || typeof b !== "number"){// esta condicion verifica si alguno de los parametros no es un numero, y si es asi, lanza un error personalizado con el mensaje "Los parametros deben ser numeros", lo que permite manejar esa situacion de manera especifica en el bloque catch, y evitar que el programa se detenga por un error de tipo
        throw new Error("Los parametros deben ser numeros")// la palabra clave throw se usa para lanzar un error de manera intencional, y se puede usar para crear errores personalizados, que pueden ser utiles para manejar situaciones especificas en nuestro codigo, como validar datos de entrada, manejar errores de negocio, etc. En este caso, se esta lanzando un error con el mensaje "Los parametros deben ser numeros", y ese error puede ser capturado por un bloque catch para manejarlo de la manera que queramos, como mostrar un mensaje en la consola, registrar el error en un archivo de log, etc.
    }
    if(a<0 || b<0){// esta condicion verifica si alguno de los parametros es un numero negativo, y si es asi, lanza un error personalizado con el mensaje "Los parametros deben ser numeros positivos", lo que permite manejar esa situacion de manera especifica en el bloque catch, y evitar que el programa se detenga por un error de valor
        throw new TypeError("Los parametros deben ser numeros positivos")// la palabra clave throw se usa para lanzar un error de manera intencional, y se puede usar para crear errores personalizados, que pueden ser utiles para manejar situaciones especificas en nuestro codigo, como validar datos de entrada, manejar errores de negocio, etc. En este caso, se esta lanzando un error con el mensaje "Los parametros deben ser numeros positivos", y ese error puede ser capturado por un bloque catch para manejarlo de la manera que queramos, como mostrar un mensaje en la consola, registrar el error en un archivo de log, etc.
    }    if(Number.isNaN(a) || Number.isNaN(b)){// esta condicion verifica si alguno de los parametros es NaN, y si es asi, lanza un error personalizado con el mensaje "Los parametros no pueden ser NaN", lo que permite manejar esa situacion de manera especifica en el bloque catch, y evitar que el programa se detenga por un error de valor
        throw new Error("Los parametros no pueden ser NaN")// la palabra clave throw se usa para lanzar un error de manera intencional, y se puede usar para crear errores personalizados, que pueden ser utiles para manejar situaciones especificas en nuestro codigo, como validar datos de entrada, manejar errores de negocio, etc. En este caso, se esta lanzando un error con el mensaje "Los parametros no pueden ser NaN", y ese error puede ser capturado por un bloque catch para manejarlo de la manera que queramos, como mostrar un mensaje en la consola, registrar el error en un archivo de log, etc.
    }//NaN pregunta si es un numero
    return a+b
}
try{
    console.log()
    console.log(sumar(2,3))// esto muestra 5 en la consola, ya que los parametros son numeros validos, y la funcion suma los dos numeros y devuelve el resultado
    console.log(sumar(-2,3))// esto produce un error, ya que el parametro a es un numero negativo, y la funcion lanza un error personalizado con el mensaje "Los parametros deben ser numeros positivos", lo que permite manejar esa situacion de manera especifica en el bloque catch, y evitar que el programa se detenga por un error de valor
    console.log(sumar(2,"3"))// esto produce un error, ya que el parametro b es una cadena de texto, y la funcion lanza un error personalizado con el mensaje "Los parametros deben ser numeros", lo que permite manejar esa situacion de manera especifica en el bloque catch, y evitar que el programa se detenga por un error de tipo
    console.log()
} catch (error){
    console.log("se produjo un error al sumar los numeros:",error.message) // el bloque catch puede recibir un parametro, que es el error que se produjo, y se puede usar ese parametro para mostrar informacion sobre el error en la consola, como el mensaje de error, la pila de llamadas, etc.
    if(error instanceof TypeError){
        console.log("El error es un TypeError, lo que indica que los parametros deben ser numeros positivos")// el operador instanceof se usa para verificar si un objeto es una instancia de una clase o de una subclase, y en este caso se esta verificando si el error que se produjo es una instancia de la clase TypeError, lo que indica que los parametros deben ser numeros positivos, y se muestra un mensaje en la consola para indicar esa situacion
    }else if(error instanceof Error){
        console.log("El error es un Error, lo que indica que los parametros deben ser numeros o no pueden ser NaN")// el operador instanceof se usa para verificar si un objeto es una instancia de una clase o de una subclase, y en este caso se esta verificando si el error que se produjo es una instancia de la clase Error, lo que indica que los parametros deben ser numeros o no pueden ser NaN, y se muestra un mensaje en la consola para indicar esa situacion
    }
}// la diferencia entre Error y TypeError es que Error es una clase base para todos los errores en JavaScript, mientras que TypeError es una subclase de Error que se usa para indicar errores de tipo, como cuando se intenta usar un valor de un tipo incorrecto, como una cadena de texto en lugar de un numero, o un numero negativo en lugar de un numero positivo. Por lo tanto, al lanzar un error personalizado con throw new Error("mensaje"), se esta creando una instancia de la clase Error, mientras que al lanzar un error personalizado con throw new TypeError("mensaje"), se esta creando una instancia de la clase TypeError, lo que permite manejar esos errores de manera especifica en el bloque catch, y mostrar mensajes diferentes en la consola dependiendo del tipo de error que se produjo.
        // Demostración: lanzar y capturar un error personalizado en un try/catch
        try {
            throw new CustomError("Este es un error personalizado", 2, 3)
        } catch (error) {
            if (error instanceof CustomError) {
                console.log("El error es un CustomError, lo que indica que se produjo un error personalizado")
                error.printnumbers()
            } else if (error instanceof TypeError) {
                console.log("El error es un TypeError, lo que indica que los parametros deben ser numeros positivos")
            } else if (error instanceof Error) {
                console.log("El error es un Error, lo que indica que los parametros deben ser numeros o no pueden ser NaN")
            }
        }

// CREAR ERRORES PERSONALIZADOS

class CustomError extends Error{// para crear un error personalizado, se puede crear una clase que extienda de la clase Error, y se pueden agregar propiedades y metodos personalizados a esa clase, como un constructor que reciba un mensaje personalizado, o un metodo que muestre informacion adicional sobre el error
    constructor(message,a,b){
        super(message) // la palabra clave super se usa para llamar al constructor de la clase padre, en este caso la clase Error, y se le pasa el mensaje personalizado que se quiere usar para ese error, lo que permite que el mensaje personalizado se muestre correctamente cuando se capture el error en un bloque catch
        this.a=a
        this.b=b
    }
    printnumbers(){
        console.log(this.a, " + " , this.b)
    }
}

try{
    console.log(sumar(2,"3"))// esto produce un error, ya que el parametro b es una cadena de texto, y la funcion lanza un error personalizado con el mensaje "Los parametros deben ser numeros", lo que permite manejar esa situacion de manera especifica en el bloque catch, y evitar que el programa se detenga por un error de tipo
} catch (error){
    if(error instanceof TypeError){
        console.log("El error es un TypeError, lo que indica que los parametros deben ser numeros positivos")
    } else if(error instanceof CustomError){
        console.log("El error es un CustomError, lo que indica que se produjo un error personalizado")
        error.printnumbers()
    } else if(error instanceof Error){
        console.log("El error es un Error, lo que indica que los parametros deben ser numeros o no pueden ser NaN")
    }
}
// los tipos de errores son: Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, AggregateError, InternalError (solo en Firefox), y CustomError (error personalizado creado por el usuario). Cada tipo de error tiene un significado diferente y se usa para indicar diferentes tipos de errores que pueden ocurrir en el codigo, como errores de sintaxis, errores de referencia, errores de tipo, etc. Al lanzar un error personalizado con throw new CustomError("mensaje"), se esta creando una instancia de la clase CustomError, lo que permite manejar ese error de manera especifica en el bloque catch, y mostrar mensajes diferentes en la consola dependiendo del tipo de error que se produjo.