/*
1. crea un objeto con 3 propiedades *
2. accede y muestra su valor * 
3. agreagar una nueva propiedad *
4. elminar una de las 3 primeras propiedades *
5. agregar una funcion e invocarla *
6. itera las proiedades del objeto *
7. crea un objeto anidado *
8. accede y muestra el valor de las propiedades anidadas *
9. comprueba si los dos objetos creados son iguales
10. comprueba si dos propiedades diferentes son iguales
*/
console.log("Ejercicio 1:");

let minovia={
    name: "Guille",
    age: 18,
    alias: "amor"
}
console.log(`mi novia es:`,minovia)

console.log("Ejercicio 2")
console.log(minovia.name)

console.log("Ejercicio 3")

minovia.motivo="me gusta mucho"
console.log(minovia)

console.log("Ejercicio 4")

delete minovia.age
console.log(minovia)

console.log("Ejercicio 5")
let minovia1={
    name: "Guille",
    age: 18,
    alias: "amor",
    work: function(){
        console.log("guille me beso")
    }
}

minovia1.work() // como esta definida como una  funcion la tengo que invovar y tratar como una

console.log("Ejercicio 6")

for(let key in minovia){
    console.log(minovia[key])//lo trato como un vector
}
console.log("Ejercicio 7,8")
let miamor={
    name:"Guille",
    age:18,
    job:{
        estudia:"ing. en informatica",
        ojos:"marrones",
        altura:"1,60 creo",
        gustos:"chocolate con frutilla, chicle de sandia, rosa, azul, blanco, rojo",
        flores:"rosas, jazmines, lirios, poenias y ranunculos"
    }
}

console.log(miamor.job)

console.log("Ejercicio 9")

console.log(miamor==minovia1)
console.log(miamor===minovia1)
console.log(miamor.name==minovia1.name)
console.log(miamor.age==minovia1.age)
//no sigo comparando porque minovia1 es un objeto anidado lo que le da otras propiedades
console.log("Ejercicio 10")

console.log(miamor.alias==minovia1.name)//false porque no dicen lo mismo

