//Desestructuración en Arrays
//Declaración del array de estudiantes donde cada estudiante es un objeto
const students = [
    {
        nombre: "Alejandro",
        calificacion: "72"
    },
    {
        nombre: "Juan José",
        calificacion: "67"
    },
    {
        nombre: "Catalina",
        calificacion: "80"
    },
    {
        nombre: "Edwin",
        calificacion: "65"
    }  
];

//Función que permite conocer estudiantes con una calificación superior a 70
const calificacion = (students) => {
    //Se inicializa el array donde se almacenarán los nombres de los estudiantes
    let mejorCalificacion = [];
    //Se recorre cada objeto del array estudiantes, tomando sus propiedades
    for (const {nombre, calificacion} of students) {
        //Se evalua si la calificación es mayor a 70
        if (calificacion > 70) {
            //En caso de que cumpla con la condición se agrega el nombre del estudiante a la lista inicializada en un comienzo
            mejorCalificacion.push(nombre);
        }
    }
    //El retorno de la función es la lista con los nombres de los estudiantes con calificación mayor a 70
    return mejorCalificacion;
}

console.log(calificacion(students));