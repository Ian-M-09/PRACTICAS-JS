/*
1. crea una clase que reciba dos propiedades *

2. añade un metodo a la clase que utilice las propiedades *

3. muestra los valores de las propiedades e invoca a la funcion *

4. añade un metodo estatico a la primera clase *

5. haz uso del metodo estatico *

6. crea una clase que haga uso de herencias *

7. crea una clase que haga uso de getters y setters *

8. modifica la clase con getters y setters para que use propiedades privadas *

9. ulitiza get y set y muestra sus valores *

10. sobrescribe un metodo de una clase que utilice herencia

*/

console.log("Ejercicio 1")
class persona{
    constructor(nombre, edad){
    this.nombre=nombre
    this.edad=edad
    }
}

let yo=new persona ("ian",20)

console.log(yo)

console.log("Ejercicio 2")
class persona1{
    constructor(nombre, edad){
    this.nombre=nombre
    this.edad=edad
    }
    met (){// este es un metodo o funcion dentro de la clase
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

let yo2=new persona1 ("ian",20)
yo2.met()

console.log("Ejercicio 3")

console.log(yo2.nombre) // para mostrar el nombre de la clase, se usa la propiedad name de la clase, que devuelve el nombre de la clase como una cadena de texto
console.log(yo2.edad)
yo2.met() // para invocar a la funcion, se usa la sintaxis objeto.metodo(), donde objeto es la instancia de la clase y metodo es el nombre del metodo que queremos llamar

console.log("Ejercicio 4,5")
class persona3{
    constructor(nombre, edad){
    this.nombre=nombre
    this.edad=edad
    }
    static metodoEstatico(){// este es un metodo estatico, que se define con la palabra clave static, y se puede llamar sin necesidad de crear una instancia de la clase, es decir, se puede llamar directamente desde la clase
        console.log("Este es un metodo estatico")
    }
}

let yo3=new persona3 ("ian",20)
persona3.metodoEstatico() // para llamar a un metodo estatico, se usa la sintaxis Clase.metodo(), donde Clase es el nombre de la clase y metodo es el nombre del metodo estatico que queremos llamar, en este caso no es necesario crear una instancia de la clase para llamar al metodo estatico, ya que se puede llamar directamente desde la clase

console.log("Ejercicio 6")

class vehiculo{
    constructor(marca, modelo){
        this.marca=marca
        this.modelo=modelo
    }
}

class moto extends vehiculo{
    constructor(marca, modelo, tipo){
        super(marca, modelo) // para llamar al constructor de la clase padre, se usa la palabra clave super, y se pasan los argumentos que necesita el constructor de la clase padre, en este caso marca y modelo
        this.tipo=tipo
    }
}
let miMoto=new moto("Honda", "CBR1000RR", "Deportiva")
console.log(miMoto)

console.log("Ejercicio 7,8,9")

class persona4{
    #nombre
    #edad
    constructor(nombre, edad){
        this.#nombre=nombre 
        this.#edad=edad
    }
    get nombre(){// este es un getter, que se define con la palabra clave get, y se usa para obtener el valor de una propiedad privada, en este caso #nombre, y se devuelve el valor de la propiedad privada
        return this.#nombre
    }
    set nombre(nuevoNombre){// este es un setter, que se define con la palabra clave set, y se usa para establecer el valor de una propiedad privada, en este caso #nombre, y se recibe un argumento nuevoNombre, que es el nuevo valor que queremos asignar a la propiedad privada, y se asigna el nuevo valor a la propiedad privada
        this.#nombre=nuevoNombre
    }
}

let yo4 = new persona4("ian", 20)
console.log(yo4.nombre) 
yo4.nombre="juan" 
console.log(yo4.nombre)

console.log("Ejercicio 10")

class nvamotor extends vehiculo{
    constructor(marca, modelo, tipo, potencia){
        super(marca, modelo)
        this.tipo=tipo
        this.potencia=potencia
        this.potencia=potencia
    }
    velocimetro(){
        console.log(`La potencia de la moto es de ${this.potencia} caballos de fuerza`)
    }
}

let miMoto2=new nvamotor("Yamaha", "YZF-R1", "Deportiva", 200)
miMoto2.velocimetro()
console.log(miMoto2)