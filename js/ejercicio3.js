//Desectructuración y Valores Predeterminados
//Persona sin la propiedad 'edad'
const persona1 = {
    nombre: "Pedro Alejandro",
}

//Persona con la propiedad 'edad'
const persona2 = {
    nombre: "Juan José",
    edad: 10
}

//Función para evaluar las propiedades de los objetos personas, en donde se especifica que edad es igual a 25 en caso de no estar presente
const checkPerson = ({ nombre, edad = 25}) => {
    //Se retorna el objeto con el nombre y edad correspondiente
    return {
        nombre,
        edad
    };
};

//Resultado en caso de no tener edad presente
console.log(checkPerson(persona1));
//Resultado en caso de tener edad
console.log(checkPerson(persona2));