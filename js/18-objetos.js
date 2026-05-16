// objetos coleccion de propiedades que se estructura de una forma muy parecida a un map

//sintaxis es como un struct en C

let person={//importante la , entre cada dato que tenga el objeto
    name: "ian",
    age: 20,// ahi el tipo de dato es un int (numero)
    alias: "kirian"
}

//acceso a propiedades

//notacion punto igual que en C

console.log(person.name)

//notacion de corchetes

console.log(person["age"])

//modificiacion 

console.log(typeof person.age)
person.age="19"// se puede cambiar incluso el tipo de dato ahora el tipo de dato es una cadena
console.log(person.age)//se cambio la edad de 20 a 19
console.log(typeof person.age)

//eliminar propiedades

delete person.alias//elimino la propiedad alias: "kirian"

console.log(person)//muestro TODO el objeto

//nueva propiedad

person.email ="mmian.alejandro@gmail" //agrego la propiedad email al objeto

console.log(person)

// metodos (funciones)

let persona = {
    name:"guille",
    age: 18,
    alias: "mi novia",
    work: function(){
        console.log("guille camina")
    }
}

persona.work()//invoco la funcion

//anidacion de objetos

let person3={// esto se puede hacer tan grande como uno quiera y puede llegar a tener todas las caracteristicas de una cosa por eso se llaman objetos
    name:"birar",
    age:"desconociodo",
    alias: "demonio",
    walk: function(){
        console.log("briar strunea")
    },
    job: {
        name: "jungla",
        exp: 18,
        work: function(){
            console.log(`el campeon ${this.name} mata`)//this se refiere al objeto en el que esta la funcion, en este caso el objeto job, por lo tanto this.name se refiere a job.name que es jungla
        }// puedo hacer referencia a las propiedades de job pero no a las propiedades de person3 porque this se refiere a job y no a person3, si quiero hacer referencia a las propiedades de person3 dentro de la funcion de job tengo que usar person3.name por ejemplo, pero no es recomendable porque si cambio el nombre del objeto person3 tendria que cambiarlo en todas las funciones que hagan referencia a el, por eso es mejor usar this para referirse a las propiedades del objeto en el que esta la funcion.
    }
}

console.log(person3)
// forma para acceder a cada campo o sub campo del objeto

console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

//igualdad de objetos

let person4={ //tiene los mismos datos que persona
    name: "ian",// por lo tanto si los imprimo van a dar los mismo datos (obviedad)
    age: 20,
    alias: "kirian"
}

console.log(person == person4)
console.log(person === person4)// es falso porque son objetos diferentes aunque tengan los mismos datos, cada objeto es una instancia diferente en memoria por lo tanto no son iguales aunque tengan los mismos datos

// para comparar objetos se debe comparar cada campo individualmente

console.log(person.name == person4.name)
console.log(person.age == person4.age)
console.log(person.alias == person4.alias)

// iteracion

for(let key in person4){// el for in itera sobre las propiedades de un objeto, en cada iteracion la variable key toma el nombre de una propiedad del objeto person4
    console.log(key, person4[key])// en cada iteracion se imprime el nombre de la propiedad (key) y su valor (person4[key])
}// el resultado de este for in es que se imprimen todas las propiedades del objeto person4 con su respectivo valor
// se puede usar el for in para modificar las propiedades de un objeto
// la variable key puede tener cualquier nombre, no necesariamente tiene que ser key, pero es una convención usar key para indicar que se esta iterando sobre las propiedades de un objeto. es local al ciclo for in, no afecta a otras partes del codigo.

//funciones como objetos
//deberia ser una clase pero como no se vio eso se hace con funciones, es lo mismo pero con funciones en vez de clases
function saludar(name,age,alias){
    this.name = name// this se refiere a la funcion saludar, por lo tanto this.name se refiere a saludar.name
    this.age = age
    this.alias = alias
}
let saludo = new saludar("guillermina", 20, "guille")// se crea un nuevo objeto saludo a partir de la funcion saludar, es decir, saludo es una instancia de saludar, por lo tanto saludo tiene las propiedades name, age y alias que se definen en la funcion saludar
console.log(saludo)

console.log(typeof saludar)// la funcion saludar es un objeto de tipo function, por lo tanto su tipo es function
console.log(typeof saludo)// el objeto saludo es un objeto de tipo object, por lo tanto su tipo es object


