// IMPORTACIN DE MODULOS

import { add } from "./28-export-modulos.js"// esto me importa la funcion add del archivo 28-export-modulos.js, lo que me permite usar esa funcion en este archivo para realizar operaciones de suma, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion

import { PI, name, circle } from "./28-export-modulos.js"// esto me importa la constante PI del archivo 28-export-modulos.js, lo que me permite usar esa constante en este archivo para realizar operaciones que requieran el valor de PI, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion
// puedo importar varias cosas del mismo archivo usando una sola linea de codigo, separando los nombres de las cosas que quiero importar con comas, por ejemplo: import { add, PI } from "./28-export-modulos.js", lo que me permite importar varias cosas del mismo archivo de forma mas eficiente y organizada, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion

import resta from "./28-export-modulos.js"// esto me importa la funcion substract del archivo 28-export-modulos.js, lo que me permite usar esa funcion en este archivo para realizar operaciones de resta, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion, ya que substract es la exportacion por defecto del archivo 28-export-modulos.js, lo que me permite importarla sin necesidad de usar llaves {}, a diferencia de las otras cosas que se exportan con export normal, como add, PI y name, que si necesitan ser importadas con llaves {} para indicar que son exportaciones nombradas
// le puedo poner cualquier nombre a la funcion que importo como exportacion por defecto, ya que no necesito usar llaves {} para indicar que es una exportacion nombrada, por ejemplo: import resta from "./28-export-modulos.js", lo que me permite importar la funcion substract con el nombre de resta en este archivo, lo que me permite usar esa funcion con el nombre de resta en este archivo para realizar operaciones de resta, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion, ya que substract es la exportacion por defecto del archivo 28-export-modulos.js, lo que me permite importarla sin necesidad de usar llaves {}, a diferencia de las otras cosas que se exportan con export normal, como add, PI y name, que si necesitan ser importadas con llaves {} para indicar que son exportaciones nombradas

//funciones

console.log(add(2, 3))// esto me muestra el resultado de la funcion add con los argumentos 2 y 3 en la consola del navegador, lo que me permite verificar que la funcion add esta funcionando correctamente y que se ha importado correctamente desde el archivo 28-export-modulos.js

//propiedades

console.log(PI)// esto me muestra el valor de la constante PI en la consola del navegador, lo que me permite verificar que la constante PI esta funcionando correctamente y que se ha importado correctamente desde el archivo 28-export-modulos.js
console.log(name)// esto me muestra el valor de la variable name en la consola del navegador, lo que me permite verificar que la variable name esta funcionando correctamente y que se ha importado correctamente desde el archivo 28-export-modulos.js


// importacion por defecto
console.log(resta(5, 2))// esto me muestra el resultado de la funcion substract con los argumentos 5 y 2 en la consola del navegador, lo que me permite verificar que la funcion substract esta funcionando correctamente y que se ha importado correctamente desde el archivo 28-export-modulos.js, ya que substract es la exportacion por defecto del archivo 28-export-modulos.js, lo que me permite importarla sin necesidad de usar llaves {}, a diferencia de las otras cosas que se exportan con export normal, como add, PI y name, que si necesitan ser importadas con llaves {} para indicar que son exportaciones nombradas  

//clases

let circulo= new circle(5)
console.log(circulo.radius)// esto me muestra el valor de la propiedad radius del objeto circulo en la consola del navegador, lo que me permite verificar que la clase circle esta funcionando correctamente y que se ha importado correctamente desde el archivo 28-export-modulos.js
console.log(circulo.area().toFixed(2))// esto me muestra el resultado del metodo area del objeto circulo en la consola del navegador, lo que me permite verificar que la clase circle esta funcionando correctamente y que se ha importado correctamente desde el archivo 28-export-modulos.js
//.toFixed(2) es un metodo que me permite redondear el resultado del metodo area a 2 decimales
console.log(circulo.perimetro().toFixed(2))// esto me muestra el resultado del metodo perimetro del objeto circulo en la consola del navegador, lo que me permite verificar que la clase circle esta funcionando correctamente y que se ha importado correctamente desde el archivo 28-export-modulos.js

// proyecto modular

//import {myclass} from "./classes/myclass.js" essto me importa la clase my class desde la carpeta myclass donde esta el archivo myclass.js que contiene la clase myclass, lo que me permite usar esa clase en este archivo para crear objetos de tipo myclass y usar sus metodos y propiedades, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion


