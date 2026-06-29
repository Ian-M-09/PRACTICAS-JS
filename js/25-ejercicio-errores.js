/*
1. captura una excepcion con try catch
2. captuara una excepcion con try catch finally
3. lanza una excepcion generica
4. crea una excepcion personalizada
5. lanza una excepcion personalizada
6. lanza barias expeciones segun una logica definida
7. captura varias excepciones en un mismo try catch
8. crea un bucle que intente transformar a float cada valor y capture y muestre los errores
9.crea una funcion que verifique si un objeto tiene una propiedad espedifica y lance una excepcion personalizada
10. crea una funcion que realice reintetos en caso de error hasta un maximo de 10

*/
console.log("1. captura una excepcion con try catch");
try {
  let resultado = undefinedVariable + 10; // Esto generará un error porque undefinedVariable no está definida
    } catch (error) {
  console.log("Error capturado:", error.message);
}  

console.log("2. captuara una excepcion con try catch finally");
try {
  let resultado = undefinedVariable + 10; // Esto generará un error porque undefinedVariable no está definida 
    } catch (error) {
  console.log("Error capturado:", error.message); // Captura el error y muestra el mensaje
} finally {
  console.log("Bloque finally ejecutado"); // Este bloque se ejecutará siempre, haya o no error
}

console.log("3. lanza una excepcion generica");
//throw new Error("Esta es una excepción genérica"); lo dejo comentado para que no interrumpa la ejecucion del script

console.log("4. crea una excepcion personalizada");
class CustomError extends Error {
    constructor(message) {  
        super(message);
        this.name = "CustomError"; 
    }
        printMessage() {
        console.log(`CustomError: ${this.message}`);
    }
}

console.log("5. lanza una excepcion personalizada");
try {
  throw new CustomError("Este es un error personalizado");
} catch (error) {
  if (error instanceof CustomError) {
    error.printMessage();
  } else {
    console.log("Error capturado:", error.message);
  }
}

console.log("6. lanza barias expeciones segun una logica definida");
function lanzarExcepcionSegunLogica(valor) {// Esta función lanza diferentes excepciones según el valor proporcionado
    if (valor < 0) {// Si el valor es negativo, lanza una excepción personalizada
        throw new CustomError("Valor negativo no permitido");
    } else if (valor === 0) {// Si el valor es cero, lanza una excepción genérica
        throw new Error("Valor cero no permitido");
    } else if (valor > 100) {// Si el valor es mayor a 100, lanza otra excepción genérica
        throw new Error("Valor mayor a 100 no permitido");
    } 
}

try {
    console.log(lanzarExcepcionSegunLogica(-5));// llama a la función con un valor negativo, lo que generará una excepción personalizada
} catch (error) {// Captura la excepción y verifica su tipo
    if (error instanceof CustomError) {// Si es una excepción personalizada, llama al método printMessage para mostrar el mensaje
        error.printMessage();
    } else {// Si es una excepción genérica, muestra el mensaje de error
        console.log("Error capturado:", error.message);
    }
}

console.log("7. captura varias excepciones en un mismo try catch");
try {
    throw new ReferenceError("No se encontró la variable");
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Error de referencia capturado:", error.message);
    } else if (error instanceof TypeError) {
        console.log("Error de tipo capturado:", error.message);
    } else {
        console.log("Error capturado:", error.message);
    }
}

console.log("8. crea un bucle que intente transformar a float cada valor y capture y muestre los errores");

let valores = ["3.14", "2.71", "hola", "5.0", "mundo"];

for (let valor of valores) {
    try {
        let numero = parseFloat(valor);
        console.log(`Valor transformado a float: ${numero}`);
    } catch (error) {
        console.log(`Error al transformar el valor "${valor}": ${error.message}`);
    }
}

console.log("9. crea una funcion que verifique si un objeto tiene una propiedad espedifica y lance una excepcion personalizada");   
function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {//hasOwnProperty verifica si el objeto tiene la propiedad especificada
        throw new CustomError(`La propiedad "${propiedad}" no existe en el objeto`);
    }
    console.log(`La propiedad "${propiedad}" existe en el objeto`);
}
verificarPropiedad({ nombre: "Juan", edad: 30 }, "nombre"); // La propiedad "nombre" existe en el objeto

console.log("10. crea una funcion que realice reintetos en caso de error hasta un maximo de 10");
function reintentarOperacion(operacion, maxReintentos = 10) {
    let intentos = 0;
    while (intentos < maxReintentos) {
        try {
            return operacion();
        } catch (error) {
            intentos++;
            console.log(`Error capturado: ${error.message}. Intento ${intentos} de ${maxReintentos}`);
            if (intentos >= maxReintentos) {
                throw new Error("Se alcanzó el número máximo de reintentos");
            }
        }
    }
}

try {
    reintentarOperacion(() => {// Esta función simula una operación que puede fallar
        // () => { ... } es una función flecha que se pasa como argumento a reintentarOperacion
        // una funcion flecha es una forma concisa de escribir funciones en JavaScript no tiene nombre y no tiene su propio this, arguments, super o new.target
        throw new Error("Fallo temporal");// Simula una operación que falla
    }, 3);// Se especifica un máximo de 3 reintentos
} catch (error) {
    console.log("Error final:", error.message);
}
