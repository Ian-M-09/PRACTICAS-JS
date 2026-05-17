// CONSOLE

//console.log

console.log("Hola mundo")// esto me muestra el mensaje "Hola mundo" en la consola del navegador, y es una forma de mostrar informacion en la consola para depurar el codigo o para mostrar resultados de operaciones o variables

// console.error

console.error("Esto es un error")// esto me muestra el mensaje "Esto es un error" en la consola del navegador, pero con un formato diferente al de console.log, ya que se muestra en rojo y con un icono de error, lo que indica que se trata de un mensaje de error, y se puede usar para mostrar mensajes de error o para depurar el codigo cuando ocurre un error

// console.warn

console.warn("Esto es una advertencia")// esto me muestra el mensaje "Esto es una advertencia" en la consola del navegador, pero con un formato diferente al de console.log, ya que se muestra en amarillo y con un icono de advertencia, lo que indica que se trata de un mensaje de advertencia, y se puede usar para mostrar mensajes de advertencia o para depurar el codigo cuando ocurre una situacion que no es un error pero que puede ser problematica

// console.info

console.info("Esto es una informacion")// esto me muestra el mensaje "Esto es una informacion" en la consola del navegador, pero con un formato diferente al de console.log, ya que se muestra en azul y con un icono de informacion, lo que indica que se trata de un mensaje de informacion, y se puede usar para mostrar mensajes de informacion o para depurar el codigo cuando se quiere mostrar informacion relevante

// console.table

let personas=[
    ["Ian", 20],
    ["Juan", 30],
    ["Maria", 25]
]
console.table(personas)// esto me muestra la tabla de personas en la consola del navegador
personas=[
    {nombre:"Ian", edad:20, ciudad:"Buenos Aires"},
    {nombre:"Juan", edad:30, ciudad:"Cordoba"},
    {nombre:"Maria", edad:25, ciudad:"Rosario"}
]
console.table(personas)// esto me muestra la tabla de personas en la consola del navegador, con las propiedades nombre, edad y ciudad como columnas, y cada objeto como una fila, lo que facilita la visualizacion de los datos en la consola   

// console.group

console.group("Grupo de personas")// esto me crea un grupo en la consola del navegador, con el nombre "Grupo de personas", lo que permite agrupar mensajes relacionados entre si, y mostrar u ocultar ese grupo de mensajes en la consola para facilitar la lectura y la organizacion de los mensajes
console.log("Ian")
console.log("Juan")
console.log("Maria")
console.groupEnd()// esto me cierra el grupo "Grupo de personas" en la consola del navegador, lo que indica que los mensajes relacionados con ese grupo han terminado, y se puede usar para organizar los mensajes en la consola y facilitar su lectura

// console.time

console.time("Tiempo de ejecucion")// esto me inicia un temporizador en la consola del navegador, con el nombre "Tiempo de ejecucion", lo que permite medir el tiempo que tarda en ejecutarse un bloque de codigo o una funcion, y mostrar ese tiempo en la consola para depurar el codigo o para optimizar su rendimiento
let suma=0  
for(let i=0; i<10000; i++){
    suma+=i
}//ambos tienen que tener el mismo nombre para que se pueda medir el tiempo de ejecucion correctamente, ya que console.time y console.timeEnd se usan en pares para medir el tiempo de ejecucion de un bloque de codigo o una funcion, y si no tienen el mismo nombre, no se podra medir el tiempo de ejecucion correctamente, ya que console.timeEnd no sabra a que temporizador se refiere para detenerlo y mostrar el tiempo transcurrido
console.timeEnd("Tiempo de ejecucion")// esto me detiene el temporizador "Tiempo de ejecucion" en la consola del navegador, y me muestra el tiempo que ha transcurrido desde que se inicio ese temporizador, lo que permite medir el tiempo de ejecucion de un bloque de codigo o una funcion, y mostrar ese tiempo en la consola para depurar el codigo o para optimizar su rendimiento

// console.assert
console.assert(suma===49995000, "La suma no es correcta")// esto me muestra un mensaje de error en la consola del navegador, con el mensaje "La suma no es correcta", si la condicion suma===49995000 es falsa, lo que permite verificar que una condicion se cumple o no, y mostrar un mensaje de error en la consola si esa condicion no se cumple, lo que puede ser util para depurar el codigo o para verificar que los resultados de las operaciones son correctos

// console.count
console.count("Contador")// esto me muestra el mensaje "Contador: 1" en la consola del navegador, lo que indica que se ha llamado a console.count con el mismo nombre "Contador" una vez, y cada vez que se llama a console.count con el mismo nombre, se incrementa el contador y se muestra el mensaje con el numero de veces que se ha llamado a ese contador, lo que puede ser util para depurar el codigo o para verificar cuantas veces se ha ejecutado un bloque de codigo o una funcion
console.count("Contador")// esto me muestra el mensaje "Contador: 2" en la consola del navegador, lo que indica que se ha llamado a console.count con el mismo nombre "Contador" dos veces, y cada vez que se llama a console.count con el mismo nombre, se incrementa el contador y se muestra el mensaje con el numero de veces que se ha llamado a ese contador, lo que puede ser util para depurar el codigo o para verificar cuantas veces se ha ejecutado un bloque de codigo o una funcion
console.countReset("Contador")// esto me reinicia el contador "Contador" en la consola del navegador, lo que indica que el contador "Contador" se ha reiniciado a cero, y cada vez que se llama a console.count con el mismo nombre después de haber reiniciado el contador, se mostrara el mensaje con el numero de veces que se ha llamado a ese contador desde que se reinicio, lo que puede ser util para depurar el codigo o para verificar cuantas veces se ha ejecutado un bloque de codigo o una funcion desde un punto determinado en el tiempo

// console.trace 
function funcion1(){
    funcion2()
}
function funcion2(){
    console.trace()// esto me muestra la traza de la pila de llamadas en la consola del navegador, lo que indica el orden en el que se han llamado las funciones hasta llegar a console.trace, lo que puede ser util para depurar el codigo o para verificar el flujo de ejecucion de las funciones en el codigo
}

funcion1()// esto me llama a la funcion funcion1, que a su vez llama a la funcion funcion2, que a su vez llama a console.trace, lo que me muestra la traza de la pila de llamadas en la consola del navegador, indicando el orden en el que se han llamado las funciones hasta llegar a console.trace, lo que puede ser util para depurar el codigo o para verificar el flujo de ejecucion de las funciones en el codigo