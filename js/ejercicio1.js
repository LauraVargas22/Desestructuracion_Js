//Desectructuración y Cálculos
//Declaración del objeto y sus propiedades
const numbers = {
    a: 5,
    b: 7,
    c: 12
};

//Función flecha que toma como parámetros las propiedades del objeto
const operationNumbers = ({ a, b, c }) => {
    //Expresión matemática a realizar con los parámetros
    let operation = (a * b) + c;
    //Se retorna el resultado de la operación
    return operation;
}

//Se llama a la función para mostrar su resultado
console.log(operationNumbers(numbers));