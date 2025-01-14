//Modularización ejercicios en una sola consola
import * as archivo from "./js/ejercicio1.js"
import * as archivo2 from "./js/ejercicio2.js"
import * as archivo3 from "./js/ejercicio3.js"

console.warn('Ejercicio 1');
//Se llama a la función del ejercicio 1 para mostrar su resultado
console.log(archivo.operationNumbers(archivo.numbers));

console.warn('Ejercicio 2')
//Se llama a la función del ejercicio 2 para mostrar su resultado
console.log(archivo2.calificacion(archivo2.students));

console.warn('Ejercicio 3')
//Se llama a la función del ejercicio 3 para mostrar su resultado
//Resultado en caso de no tener edad presente
console.info('Resultado en caso de no tener edad presente')
console.log(archivo3.checkPerson(archivo3.persona1));
//Resultado en caso de tener edad
console.info('Resultado en caso de tener edad presente')
console.log(archivo3.checkPerson(archivo3.persona2));


