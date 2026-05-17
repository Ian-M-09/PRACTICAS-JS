// clases
// objetos mas complejos, con propiedades y metodos

class Persona{// clase es una plantilla para crear objetos, con propiedades y metodos
    constructor(name,age){// constructor es un metodo especial que se ejecuta al crear una instancia de la clase
        this.name=name// this hace referencia a la instancia de la clase, es decir, al objeto que se esta creando
        this.age=age// this.name y this.age son propiedades de la clase, que se asignan con los valores que se pasan como argumentos al constructor
    }   
}
// esto me permite reutilizar el codigo para crear diferentes objetos con las mismas propiedades y metodos, sin tener que escribir el mismo codigo una y otra vez

// sintaxis de clases es mas clara y facil de entender que la sintaxis de funciones constructoras, ademas de que las clases tienen algunas caracteristicas adicionales como herencia y metodos estaticos
let person1 = new Persona("Guille",18)// para crear una instancia de la clase, se usa la palabra reservada new seguida del nombre de la clase y los argumentos que se pasan al constructor entre parentesis
// esto crea un nuevo objeto person1 con las propiedades name y age asignadas con los valores "Guille" y 18 respectivamente, segun lo definido en el constructor de la clase Persona
console.log(person1)// esto me muestra el objeto person1 en la consola, con sus propiedades name y age

let person2 = new Persona("Ian",20)
console.log(person2)

class DefaultPerson{
    constructor(name = "Nombre por defecto",age=0){
        this.name=name
        this.age=age
    }
}

let person3 = new DefaultPerson()// si no se pasan argumentos al constructor, se asignan los valores por defecto definidos en la clase
console.log(person3)

// los parametros respetan un orden, por lo que si quiero asignar un valor a age pero no a name, tengo que pasar un valor para name aunque sea el valor por defecto
let person4 = new DefaultPerson("Nombre personalizado")// si quiero asignar un valor a name pero no a age, puedo pasar el valor por defecto para age, ya que es el ultimo parametro definido en el constructor
console.log(person4)
// si quiero asignar un valor a age pero no a name, tengo que pasar un valor para name aunque sea el valor por defecto, ya que es el primer parametro definido en el constructor
let person5 = new DefaultPerson("Nombre por defecto",25)
console.log(person5)

//acceso a las propiedades de una clase
console.log(person1.name)// para acceder a las propiedades de una clase, se usa la sintaxis objeto.propiedad, donde objeto es la instancia de la clase y propiedad es el nombre de la propiedad que queremos acceder
console.log(person1.age)

console.log(person1["name"])// tambien se puede acceder a las propiedades de una clase usando la sintaxis objeto["propiedad"], donde propiedad es el nombre de la propiedad entre comillas, pero esta sintaxis es menos comun y menos recomendable que la sintaxis objeto.propiedad

person3.name="Nuevo nombre"// para modificar las propiedades de una clase, se usa la misma sintaxis que para acceder a las propiedades, pero asignando un nuevo valor a la propiedad
person3.age=30
console.log(person3)

// funciones en clases
class PersonWithMethod{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){// metodo es una funcion que pertenece a una clase
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`)// this hace referencia a la instancia de la clase, es decir, al objeto que se esta creando, por lo que this.name y this.age se refieren a las propiedades name y age de la instancia de la clase
    }// para llamar a un metodo de una clase, se usa la sintaxis objeto.metodo(), donde objeto es la instancia de la clase y metodo es el nombre del metodo que queremos llamar
}// el metodo puede tener el nombre que queramos, y puede recibir argumentos como cualquier otra funcion, pero en este caso no recibe argumentos ya que solo usa las propiedades de la clase para mostrar un mensaje en la consola

let person6 = new PersonWithMethod("Ian",20)
person6.greet()// esto me muestra el mensaje "Hola, mi nombre es Ian y tengo 20 años" en la consola, ya que el metodo greet usa las propiedades name y age de la instancia de la clase person6 para mostrar el mensaje
// osea ejecuta lo que esta en la funcion greet, que es mostrar un mensaje en la consola con las propiedades name y age de la instancia de la clase person6
console.log(person6)// esto me muestra el objeto person6 en la consola, con sus propiedades name y age, y su metodo greet
//pero no me muestra el metodo greet en la consola, ya que los metodos de una clase no se muestran como propiedades del objeto, sino que se almacenan en el prototipo de la clase, por lo que no se muestran al imprimir el objeto en la consola
console.log(person6.greet)// esto me muestra la funcion greet en la consola, ya que estoy accediendo al metodo greet de la instancia de la clase person6, pero no lo estoy llamando, por lo que no se ejecuta el codigo del metodo, sino que se muestra la funcion en la consola

// propiedades privadas
// las propiedades privadas son aquellas que no se pueden acceder ni modificar desde fuera de la clase, y se definen usando el simbolo # antes del nombre de la propiedad

class PrivatePerson{
    #bank
    constructor(name,age,bank){
        this.name=name
        this.age=age
        this.#bank=bank// para asignar un valor a una propiedad privada, se usa la sintaxis this.#propiedad, donde propiedad es el nombre de la propiedad privada sin el simbolo #
    }
    pay (){
        this.#bank
    }
}
let person7 = new PrivatePerson("Guille",18,1000)
console.log(person7.name)// esto me muestra el nombre de la persona en la consola, ya que name es una propiedad publica de la clase PrivatePerson
console.log(person7.age)// esto me muestra la edad de la persona en la consola, ya que age es una propiedad publica de la clase PrivatePerson
console.log(person7.bank)// esto me muestra undefined en la consola, ya que bank es una propiedad privada de la clase PrivatePerson, y no se puede acceder a ella desde fuera de la clase
// console.log(person7.#bank)// esto me da un error en la consola, ya que no se puede acceder a una propiedad privada usando el simbolo # desde fuera de la clase, solo se puede acceder a ella usando los metodos de la clase que tengan acceso a esa propiedad privada
// de esta forma no puedo ni actualizar ni mostrar el valor de la propiedad privada bank desde fuera de la clase, lo que me permite proteger esa informacion y evitar que sea modificada o mostrada sin permiso

// getters y setters

class GetPerson{
    #name
    #age
    #bank
    constructor(name,age,bank){
        this.#name=name
        this.#age=age
    }
    get name(){
        return this.#name// para crear un getter, se usa la sintaxis get nombreGetter(), donde nombreGetter es el nombre que queremos darle al getter, y dentro del getter se devuelve el valor de la propiedad privada que queremos mostrar
    }
    set bank(newBank){// esto me permite actualizar el valor de la propiedad privada bank desde fuera de la clase, ya que el setter recibe un nuevo valor como argumento y lo asigna a la propiedad privada #bank usando la sintaxis this.#propiedad = nuevoValor, donde propiedad es el nombre de la propiedad privada sin el simbolo # y nuevoValor es el valor que se quiere asignar a esa propiedad privada
        this.#bank = newBank
    }
}

let person8 = new GetPerson("Ian",20)
console.log(person8.name)// esto me muestra el nombre de la persona en la consola, ya que estoy usando el getter name para acceder al valor de la propiedad privada #name de la clase GetPerson, y el getter devuelve ese valor para mostrarlo en la consola
console.log(person8.age)// esto me muestra undefined en la consola, ya que age es una propiedad privada de la clase GetPerson, y no se puede acceder a ella desde fuera de la clase, ni siquiera usando un getter, ya que no se ha definido un getter para esa propiedad privada
console.log(person8.bank)// esto me muestra undefined en la consola, ya que bank es una propiedad privada de la clase GetPerson, y no se puede acceder a ella desde fuera de la clase, ni siquiera usando un getter, ya que no se ha definido un getter para esa propiedad privada
person8.bank=5000// esto me asigna el valor 5000 a la propiedad privada #bank de la clase GetPerson, ya que estoy usando el setter bank para actualizar el valor de esa propiedad privada desde fuera de la clase

// herencia
// la herencia es una caracteristica de las clases que permite crear una nueva clase a partir de una clase existente, heredando sus propiedades y metodos, y agregando nuevas propiedades y metodos o modificando los existentes

class animal{
    constructor(name){
        this.name=name
    }
    sound(){
        console.log("El animal hace un sonido")
    }
}
// uso la palabra reservada extends y el nombre de la clase que quiero heredar
class dog extends animal{// esta es una clase que hereda de la clase animal, lo que significa que la clase dog tiene todas las propiedades y metodos de la clase animal, y ademas puede tener sus propias propiedades y metodos
    sound(){// si lo llamo asi me permite modificar el metodo sound heredado de la clase animal, lo que significa que cuando llame al metodo sound de una instancia de la clase dog, se ejecutara el codigo del metodo sound definido en la clase dog, en lugar del codigo del metodo sound definido en la clase animal, lo que me permite personalizar el comportamiento de ese metodo para la clase dog
        //super.sound()// para llamar a un metodo de la clase padre desde la clase hija, se usa la palabra reservada super seguida del nombre del metodo que queremos llamar, en este caso el metodo sound de la clase animal, lo que me permite usar el codigo de ese metodo en la clase dog, y luego agregar mi propio codigo para mostrar un mensaje adicional en la consola
        console.log("guau guau")   
    }
    run (){
        console.log("El perro corre")
    }
}

class fish extends animal{
    constructor(name,size){
    super(name)// la palabra reservada super se usa para llamar al constructor de la clase padre (en este caso, la clase animal) y pasarle los argumentos necesarios para inicializar las propiedades heredadas de esa clase, en este caso el nombre del animal, que es una propiedad heredada de la clase animal, por lo que necesito pasar el argumento name al constructor de la clase animal usando super(name) para que esa propiedad se inicialice correctamente en la instancia de la clase fish
    this.size=size
    }
    swim(){
        console.log("El pez nada")
    }
}

let dog1 = new dog("Firulais")// como heredo las propiedades y metodos de la clase animal, necesito darle un nombre para poder crearla
console.log(dog1)// esto me muestra el objeto dog1 en la consola, con su propiedad name heredada de la clase animal, y sus metodos sound y run heredados de la clase animal y definidos en la clase dog respectivamente
dog1.sound()// esto me muestra el mensaje "El animal hace un sonido" en la consola, ya que estoy llamando al metodo sound heredado de la clase animal, y ese metodo muestra ese mensaje en la consola
dog1.run()// esto me muestra el mensaje "El perro corre" en la consola, ya que estoy llamando al metodo run definido en la clase dog, y ese metodo muestra ese mensaje en la consola

let fish1 = new fish("Nemo",10)// como heredo las propiedades y metodos de la clase animal, necesito darle un nombre para poder crearla, ademas de que la clase fish tiene una propiedad adicional llamada size, por lo que tambien necesito pasar un valor para esa propiedad al constructor de la clase fish
console.log(fish1)// esto me muestra el objeto fish1 en la consola, con su propiedad name heredada de la clase animal, y sus metodos sound y swim heredados de la clase animal y definidos en la clase fish respectivamente
fish1.sound()// esto me muestra el mensaje "El animal hace un sonido" en la consola, ya que estoy llamando al metodo sound heredado de la clase animal, y ese metodo muestra ese mensaje en la consola
fish1.swim()// esto me muestra el mensaje "El pez nada" en la consola, ya que estoy llamando al metodo swim definido en la clase fish, y ese metodo muestra ese mensaje en la consola
// si intento llamar al metodo run de la clase dog usando la instancia fish1, me da un error en la consola, ya que ese metodo no esta definido en la clase fish ni en la clase animal, por lo que no se puede usar con esa instancia de la clase fish

// metodos estaticos
// los metodos estaticos son aquellos que se pueden llamar directamente desde la clase, sin necesidad de crear una instancia de esa clase, y se definen usando la palabra reservada static antes del nombre del metodo

class matematicas{
    static sumar(a,b){
        return a+b
    }
}
// puedo mezclar en la misma clase metodos estaticos y metodos normales, lo que me permite tener una clase con diferentes tipos de metodos para diferentes propósitos, por ejemplo, puedo tener una clase con metodos estaticos para realizar operaciones matematicas basicas, y metodos normales para realizar operaciones mas complejas que requieran el uso de propiedades de la clase o de otras instancias de la clase
console.log(matematicas.sumar(2,3))// esto me muestra el resultado de la suma de 2 y 3 en la consola, que es 5, ya que estoy llamando al metodo estatico sumar de la clase matematicas, y ese metodo recibe dos argumentos a y b, y devuelve la suma de esos argumentos, lo que me permite usar ese metodo sin necesidad de crear una instancia de la clase matematicas
// osea sin crear una variable que sea una instancia de la clase matematicas, puedo usar el metodo sumar directamente desde la clase, lo que me permite ahorrar tiempo y recursos al no tener que crear un objeto solo para usar ese metodo
