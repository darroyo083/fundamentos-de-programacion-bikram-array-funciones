//arrays
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5,6 ,7 ,8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b' ,'c']]

// funciones
function suma(a, b) {
    return a + b;
}

function potenciacion(a, b){
    return a ** b;
}

function separarPalabras(texto){
    return texto.split(' ');
}

function repetirString(texto, num){
    return texto.repeat(num);
}

function esPrimo(num){
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    }
 }

// arrays y funciones
function ordenarArray(array){
    return array.sort()
}

function obtenerPares(array){
    return array.filter(num => num % 2 === 0);
}

function pintarArray(array) {
    return `[${array.join(", ")}]`;
  }
  
function arrayMapi(array, funct){
    return array.map(funct);
}

function eliminarDuplicados(array) {
    let resultado = []; 
  
    for (let i = 0; i < array.length; i++) {
      if (!resultado.includes(array[i])) { 
        resultado.push(array[i]);
      }
    }
  
    return resultado;
  }

  //iteraciones proyecto
  //arrays
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ['Hola', 'Mundo'];

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//funciones
function multiplicacion(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

function esPar(num){
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function resta(a, b){
    return a - b;
}

let arrayFunciones = [suma, resta, multiplicacion]

// arrays y funciones
function ordenarArray2(array){
    return array.sort()
}

function obtenerImpares(array){
    return array.filter(num => num % 2 !== 0)
}

function sumarArray(array){
    let suma=0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

function multiplicarArray(array){
    let multiplicacion = 1;
    for (let i = 0; i < array.length; i++) {
        multiplicacion *= array[i];
    }
    return multiplicacion;
}
