/*Explorar diferentes sintaxis de funcinoes para resolver los ejercicicios
1. crear una funcion que reciba dos numeros y devuelva su suma  *
2. crear una funcion que reciba un array de numeros y devuelva el mayor de la lista *
3. crear una funcion que reciba un string y devuelva el numero de vocales que contiene  *
4. crear una funcion que reciba un array de strings y devuelva un nuevo array con las strings en mayusculas *
5. crear una funcion que reciba un numero y devuelva true si es primo, y false en caso contrario *
6. crear una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos *
7. crear una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares *
8. crear una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado *
9. crear una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso *
10. crear una funcion que calcule el factorial de un numero dado 
*/

//1.
console.log("ejercicio 1")
function suma(a,b){
    return a+b
}
console.log (suma(5,10))

const suma1=(a,b)=> a+b//funcion flecha
console.log(suma1(2,3))

const suma2=function(a,b){// funcion anonima
    return a+b
}
console.log(`el resultado es= ${suma2(5,1)}`)

console.log("ejercicio 2")

const array= [1,2,3,4,5,6]

function mayor(array){
    let m=array[0]
    for(let i=0; i<array.length;i++){
        if(array[i]>m){
            m=array[i]
        }
    }
    return m
}
console.log(`el numero mayor es ${mayor(array)}`)


console.log("ejercicio 3")

function vocal(string){
    cont=0
    for(i=0;i<string.length;i++){
        if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u")
            cont=cont+1
    }
    return cont
}

console.log(`la cantidad de vocales es = ${vocal("hola")}`)

console.log("ejercicicio 4")

const arraystring=["hola","chau","ian"]

function mayusculas(arraystring){
    let newarray =[] //crea un array vacio. otra forma seria let newarray = new Array()
    for(let i=0;i<arraystring.length;i++){
        letra=arraystring[i].toUpperCase() // pasa de minusculas a mayusculas
        newarray[i]=letra
    }
    return newarray//en js si se puede retornar un array
}
console.log(mayusculas(arraystring))

console.log("ejercicicio 5")

function primo(a){
    for(let i=2;i<a;i++){
        if(a%i===0){
            return false
        }
    }
    return true
}
console.log(primo(7))
console.log(primo(4))
    
console.log("ejercicio 6")

const array1=[1,2,3,4,5]
const array2=[3,4,5,6,7]

function interseccion(array1,array2){// mi forma
    let nvo= new Array(),k=0
    for(let i=0;i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array1[i]===array2[j]){
                nvo[k]=array1[i]
                k++
            }
        }
    }
    return nvo
}

console.log(`los elementos que tienen en comun son ${interseccion(array1,array2)}`)

function interseccion(array1, array2) {// forma mejorada 
    const nvo = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                if (!nvo.includes(array1[i])) {
                    nvo.push(array1[i]);
                }
                break;
            }
        }
    }
    return nvo;
}


console.log("ejercicio 7")

const array3=[2,3,4,5,6,7,8]

function sumaPares(array3){
    let acu=0
    for(let i=0;i<array3.length;i++){
        if(array3[i]%2===0){
            acu=acu+array3[i]
        }
    }
    return acu
}

console.log(`la suma de los numeros pares es ${sumaPares(array3)}`)

console.log("ejercicio 8")

const array4=[1,2,3,4]

function elevarCuadrado(array4){
    nvo= new Array()
    for(let i=0;i<array4.length;i++){
        nvo[i]=array4[i]**2
    }
    return nvo
}

console.log(`el nuevo array es ${elevarCuadrado(array4)}`)

console.log("ejercicio 9")

function invierte(string){// mi forma
    let nvotext="",nvot=""
    for(let i=string.length-1;i>=0;i--){
        nvotext=string[i]
        nvot=nvot+nvotext
    }   
    return nvot
}

console.log(invierte("hola"))

function invierte(string) {// forma mejorada
    let nvot = "";
    for (let i = string.length - 1; i >= 0; i--) {
        nvot += string[i];
    }
    return nvot;
}

console.log("ejercicicio 10")

function factorial(a){
    let fac=1 
    while(a>0){
        fac=fac+a
        a--
    }
    return fac
}

console.log(`el factorial es ${factorial(4)}`)
