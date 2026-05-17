// EXPORTACION DE MODULOS

// FUNCIONES
export function add(a, b) {// esta funcion add toma dos argumentos a y b, y devuelve la suma de ambos, lo que me permite realizar operaciones de suma en otros archivos que importen esta funcion, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion
    return a + b
}

// PROPIEDADES

export const PI = 3.1416// esta constante PI tiene el valor de 3.1416, lo que me permite usar esa constante en otros archivos que importen esta propiedad, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion
export let name= "ian"// esta variable name tiene el valor de "ian", lo que me permite usar esa variable en otros archivos que importen esta propiedad, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion

// CLASES 

export class circle {// esta clase circle tiene una propiedad radius y un metodo area, lo que me permite crear objetos de tipo circle en otros archivos que importen esta clase, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion
    constructor(radius) {
        this.radius = radius
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    perimetro(){
        return 2+ Math.PI * this.radius
    }
}

// exportacion por defecto

export default function substract(a, b) {
    return a - b
}// la palabra default indica que esta funcion es la exportacion por defecto del archivo, lo que me permite importarla sin necesidad de usar llaves {}, a diferencia de las otras cosas que se exportan con export normal, como add, PI y name, que si necesitan ser importadas con llaves {} para indicar 
// que son exportaciones nombradas, lo que me permite usar esa funcion en otros archivos que importen esta funcion, y es una forma de organizar el codigo en modulos para facilitar su mantenimiento y reutilizacion
// solo puedo tener una exportacion por defecto en un archivo. ademas las cosas que puedo exportar con export default son solo funciones, clases, objetos o valores primitivos, pero no puedo exportar variables con export default, ya que las variables necesitan ser exportadas con export normal para poder ser importadas con llaves {} en otros archivos.
