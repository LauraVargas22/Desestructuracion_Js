//Desectructuración y Valores Predeterminados
//Persona sin la propiedad 'edad'
export const persona1 = {
    nombre: "Pedro Alejandro",
}

//Persona con la propiedad 'edad'
export const persona2 = {
    nombre: "Juan José",
    edad: 10
}

//Función para evaluar las propiedades de los objetos personas, en donde se especifica que edad es igual a 25 en caso de no estar presente
export const checkPerson = ({ nombre, edad = 25}) => {
    //Se retorna el objeto con el nombre y edad correspondiente
    return {
        nombre,
        edad
    };
};