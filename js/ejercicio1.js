//Desectructuración y Cálculos
//Declaración del objeto y sus propiedades
export const numbers = {
    a: 5,
    b: 7,
    c: 12
};

//Función flecha que toma como parámetros las propiedades del objeto
export const operationNumbers = ({ a, b, c }) => {
    //Expresión matemática a realizar con los parámetros
    let operation = (a * b) + c;
    //Se retorna el resultado de la operación
    return operation;
}