# Desestructuración en Javascript
Por medio de este proyecto se desarrollaron ejercicios lógicos sobre desestructuración en Javascript los cuales se ejecutan en consola. En su desarrollo se hizo uso de importación y exportación para la visualización de los tres ejercicios en una sola consola, la cual corresponde al archivo principal app.js

- [Archivo Principal](app.js):
    En la parte superior del archivo se encontrarán las importaciones correspondientes a cada uno de los ejercicios.
    ```
    import * as archivo3 from "./js/ejercicio3.js"
    ```
    En este se hace el llamado de cada una de las funciones desarrolladas en los archivos importados, es por esto que para mejorar la legibilidad se agregaron console.warn de acuerdo al ejercicio correspondiente.

- [Primer Ejercicio](js/ejercicio1.js):
    En este ejercicio se pide realizar desestructuración de un objeto donde sus propiedades son parámetros de la función de flecha, la cual retorna el resultado de la expresión matemática **(a * b) + c** 

- [Segundo Ejercicio](js/ejercicio2.js):
    Se declara un array de estudiantes donde cada estudiante es un objeto con propiedades 'nombre' y 'calificación', por medio de una función se recibe el array, para así evaluar aquellos estudiantes con una calificación mayor a 70. Por lo que, se desetructuran las propiedades de cada estudiante evaluando si la calificación es mayor a 70 en caso de ser acertada se agrega el nombre del estudiante en una lista, la cual es el retorno de la función.

- [Tercer Ejercicio](js/ejercicio3.js):
    Se crearon dos objetos con propiedades 'nombre' y 'edad', esto con el fin de ser parámetros de la función checkPerson en donde se desestructuran las propiedades mencionadas anteriormente, si el objeto previamente declarado no tiene como propiedad 'edad' se asigna una edad igual a 25, siendo el retorno de la función el objeto con ambas propiedades.
