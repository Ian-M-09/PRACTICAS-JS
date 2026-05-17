/*
1. usa desestructuracion para extraer los dos primeros elementos del array *
2. usa desestructuracion en un array y asigna un valor predeterminado a una variable *
3. usa desestructuracion para extraer dos propiedades de un objeto *
4. usa desestructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombre diferente *
5. usa desetructuracion para extraer dos propiedades de un objeto anidado *
6. usa propagacion para combinar dos arrays en uno nuevo *
7. usa propagacion para crear una copia de un array *
8. usa propagacion para combinar dos objetos en uno nuevo *
9. usa propagacion para crear una copia de un objeto *
10. combina desetructuracion y propagacion
*/

console.log("Ejercicio 1")

let myArray = [1,2,3,4]

let [a,b]=myArray

console.log(a)
console.log(b)

console.log("Ejercicio 2")

let [c,d,e,r,q="hola"]=myArray
console.log(c)
console.log(d)
console.log(e)
console.log(r)
console.log(q)

console.log("Ejercicio 3")

let fecha={
    dia:16,
    mes:5,
    year: 2026
}

let {dia,mes}=fecha
console.log(dia)
console.log(mes)

console.log("Ejercicio 4")

let {dia:day,mes:month}=fecha

console.log(day)
console.log(month)

console.log("Ejercicio 5")

let person={
    name:"Guille",
    age: 18,
    titulo: "Novia",
    job:{
        ocupacion: "estudiante",
        apodo: "mi amor"
    }
}

let {name,job:{apodo}}=person// para extraer una propiedad de un objeto anidado, se usa la misma sintaxis pero con el nombre del objeto anidado seguido de la propiedad que queremos extraer
console.log(name)
console.log(apodo)

console.log("Ejercicio 6")

let myArray2=[6,7,8,9,0]

let myNvoArray=[...myArray, ...myArray2]

console.log(myNvoArray)

console.log("Ejercicio 7")

let copia=[...myArray]

console.log(copia)

console.log("Ejercicio 8")

let nvoObjet={...person,...fecha}

console.log(nvoObjet)

console.log("Ejercicio 9")

let copiaObjet={...person}

console.log(copiaObjet)

console.log("Ejercicio 10")

let {name:nombre,age:edad}=copiaObjet//combino desestructuracion y propagacion para extraer propiedades de un objeto y asignarlas a nuevas variables con nombre diferente

console.log(nombre)
console.log(edad)
