
myArray = [1,2,3,4]

let person={
    name:"ian",
    age: 20,
    alias: "kirian"
}

myArray.push(5)

console.log(myArray)

myValue=myArray[1]
console.log(myValue)

let myName=person.name
console.log(myName)

//Desestructuración
// nos permite extraer valores de un array o propiedades de un objeto y asignarlos a variables

//sintaxis de desestructuración de arrays

myArray2=[10,20,30,40]

let [a,b,c,d]=myArray2

console.log(a)
console.log(b)
console.log(c)
console.log(d)
//guardo cada dato del vector en una variable diferente

//sintaxis de arrays con valores por defecto

let [e,f,g,h,i=50]=myArray2

console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)//si el valor no existe en el array, se asigna el valor por defecto

// si creo con , sin ninguna variable, se ignora el valor del array

let [j,,k]=myArray2
console.log(j)
console.log(k)

//desestructuración de objetos
let {name,age,alias}=person// en un objeto se usan llaves {} para la desestructuración, y se asignan las propiedades del objeto a variables con el mismo nombre

console.log(name)
console.log(age)
console.log(alias)

//objetos con valores por defecto
let {name:nombre,age:edad,alias:apodo,rol="estudiante"}=person// si quiero asignar un nombre diferente a la variable, uso : y el nuevo nombre

console.log(nombre)
console.log(edad)
console.log(apodo)
console.log(rol)  

//propagación
//nos permite copiar los elementos de un array u objeto a otro array u objeto

//propagación de arrays
let myArray3=[...myArray2]// con ... se copian los elementos de myArray2 a myArray3
// uso [] para crear un nuevo array y ... para copiar los elementos del array original
console.log(myArray3)

let myArray4=[...myArray2,...myArray]// con ... se copian los elementos de myArray2 y myArray a myArray4
console.log(myArray4)

//propagación de objetos
let myPerson={...person}// con ... se copian las propiedades de person a myPerson
// uso {} para crear un nuevo objeto y ... para copiar las propiedades del objeto original
console.log(myPerson)

let myPerson2={...person,rol:"estudiante"}// con ... se copian las propiedades de person a myPerson2 y se agrega la propiedad rol con el valor "estudiante"
console.log(myPerson2)