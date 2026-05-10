//Funciones bloque de codigo diseñado para hacer una tarea concreta se pueden reutilizar las veces que queramos
// los modulos o funciones de C

//funcino simple sin parametros, no devuelve nada
// todo lo que este dentro de la funcion es local, no se puede acceder a las variables que estan dentro de la funcion desde fuera de la funcion, solo se pueden acceder a las variables que estan dentro de la funcion desde dentro de la funcion
function saludar(){
    console.log("Hola, soy una función")
}

// tengo que llamar a la funcion para que se ejecute
myFuncion(1) // asi se llama a la funcion, se ejecuta el bloque de codigo que esta dentro de la funcion
// se ejecuta una sola vez, si quiero que se ejecute varias veces tengo que llamarla varias veces

for(let i=0;i<5;i++){
    saludar() // llamo a la funcion dentro del bucle, se ejecutara 5 veces
    console.log("Iteración " + i) // muestra el numero de iteracion
    console.log() // salto de linea
}


// muestra el numero de iteracion y un mensaje

//funcion con parametros, no devuelve nada
function myFuncion(iteracion){ // estructura de una funcion, todo lo que este dentro de la funcion es local
    console.log(`Iteración ${iteracion}: hola mi función`)
}

for(i=0;i<5;i++){
    myFuncion(i) // llamo a la funcion dentro del bucle, se ejecutara 5 veces
    console.log() // salto de linea
}

function saludarPersona(nombre){ // funcion con parametro, el parametro es el nombre de la persona a saludar
    console.log(`hola, ${nombre}`)// muestra el mensaje de saludo con el nombre de la persona
}

saludarPersona("ian")// le paso por parametros el nombre de la persona a saludar, se ejecuta la funcion y muestra el mensaje de saludo con el nombre de la persona

// funcion anonima es una funcion que no tiene un nombre, se asigna a una variable, el nombre de la variable es el nombre de la funcion, se ejecuta la funcion llamando a la variable, se puede pasar por parametros y devolver un valor

const saludarPersona2 = function(nombre){ // funcion anonima, se asigna a una variable, el nombre de la variable es el nombre de la funcion
    console.log(`hola, ${nombre}`) // muestra el mensaje de saludo con el nombre de la persona
}
saludarPersona2("guada") // le paso por parametros el nombre de la persona a saludar, se ejecuta la funcion y muestra el mensaje de saludo con el nombre de la persona

//arrow function al igual que las funciones anonimas, las arrow function no tienen un nombre, se asigna a una variable, el nombre de la variable es el nombre de la funcion, se ejecuta la funcion llamando a la variable, se puede pasar por parametros y devolver un valor

const myFuncion3=(name) => {
    console.log(`hola, ${name}`)
}

myFuncion3("gille")

const myFuncion4=(name) => console.log(`hola, ${name}`)

myFuncion4("tomi")

// parametros

function operaciones(a,b){
    console.log(`suma`,a+b)
    console.log("resta",a-b)
    console.log("division",a%b)//(me da el resto. es el mod)calcula el resto de la division, es decir, el numero que sobra despues de dividir a entre b
    console.log("modulo",a/b)//(me da el cociente)calcula el cociente de la division, es decir, el numero de veces que b cabe en a
    console.log("multiplicacion",a*b)
    console.log("potencia",a**b)
}

operaciones(2,4)


// valores por defecto en los parametros, si no le paso por parametros los valores de a y b, se asignan los valores por defecto de 0, entonces la funcion se ejecuta con a=0 y b=0, y muestra el resultado de las operaciones con esos valores

function suma(a=0,b=0){
    console.log(`suma`,a+b)
    console.log("resta",a-b)
    console.log("division",a%b)//(me da el resto. es el mod)calcula el resto de la division, es decir, el numero que sobra despues de dividir a entre b
    console.log("modulo",a/b)//(me da el cociente)calcula el cociente de la division, es decir, el numero de veces que b cabe en a
    console.log("multiplicacion",a*b)
    console.log("potencia",a**b)
}

suma()// si no le paso por parametros los valores de a y b, se asignan los valores por defecto de 0, entonces la funcion se ejecuta con a=0 y b=0, y muestra el resultado de las operaciones con esos valores
suma(5,10)// si le paso por parametros los valores de a y b, se asignan esos valores a y b, entonces la funcion se ejecuta con esos valores, y muestra el resultado de las operaciones con esos valores
//puedo darle un valor a una sola variable y la otra va a usar el valor por defecto
suma(5) // si le paso por parametros el valor de a, se asigna ese valor a a, y b toma el valor por defecto de 0, entonces la funcion se ejecuta con a=5 y b=0, y muestra el resultado de las operaciones con esos valores

//retorno de valores, una funcion puede devolver un valor, para eso se utiliza la palabra reservada return, el valor que se devuelve se puede almacenar en una variable, o se puede mostrar directamente

function suma2(a,b){
    return a+b
}

console.log(suma2(5,10)) // si llamo a la funcion sin almacenar el valor que devuelve en una variable, se muestra el resultado de la suma directamente
// tambien puedo almacenar el valor que devuelve la funcion en una variable, y luego mostrar esa variable


// funciones anidadas

function externa(){
    console.log("Hola, soy la función externa")
    function interna(){
        console.log("Hola, soy la función interna")
    }
    interna() // llamo a la funcion interna dentro de la funcion externa, se ejecuta la funcion interna cada vez que se ejecuta la funcion externa
}
externa() // llamo a la funcion externa, se ejecuta la funcion externa y la funcion interna cada vez que se ejecuta la funcion externa
// si llamo a la funcion interna desde fuera de la funcion externa, me da un error, porque la funcion interna es local a la funcion externa, no se puede acceder a ella desde fuera de la funcion externa


//funciones de orden superior, son funciones que reciben como parametro otra funcion, o devuelven una funcion, o ambas cosas
function applyFunc(funcion,parametro){
    funcion(parametro)//llamo a al funcion que recibo como parametro(funcion), le paso el parametro que recibo (parametro), se ejecuta la funcion que recibo con el parametro que le paso 
}
applyFunc(myFuncion4,"funcino de orden superior")

// foreach es un metodo de los arrays que recibe una funcion como parametro, y ejecuta esa funcion para cada elemento del array, la funcion que recibe como parametro puede recibir el elemento del array como parametro, o el indice del elemento, o el array completo
    myArray = [1,2,3,4,5]
    myArray.forEach(value => console.log(value)) // el metodo forEach recibe una funcion como parametro, y ejecuta esa funcion para cada elemento del array, en este caso la funcion que recibe como parametro es una arrow function que recibe el valor del elemento del array como parametro, y muestra ese valor

// funciona tambien para el set y map
// puede recibir una funcion como parametro, y ejecuta esa funcion para cada elemento del set o map, la funcion que recibe como parametro puede recibir el elemento del set o map como parametro, o el indice del elemento, o el set o map completo
mySet = new Set([1,2,3,4,5])
mySet.forEach(value => console.log(value)) // el metodo forEach recibe una funcion como parametro, y ejecuta esa funcion para cada elemento del set, en este caso la funcion que recibe como parametro es una arrow function que recibe el valor del elemento del set como parametro, y muestra ese valor

// no pueden usar breack ni continue, porque no tienen un bloque de codigo propio, se ejecutan dentro del bloque de codigo del metodo forEach, entonces no pueden usar breack ni continue para salir del bloque de codigo del metodo forEach, si quiero salir del bloque de codigo del metodo forEach, tengo que usar return, pero eso solo sale de la funcion que recibe como parametro, no sale del bloque de codigo del metodo forEach, entonces el metodo forEach sigue ejecutando la funcion para los siguientes elementos del array, set o map
