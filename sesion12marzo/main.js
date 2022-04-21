// let personas = [
//     "peter"
//     "jose"
//     "alan"
//     "jesus"
//     "peter"
//     "jose"
//     "alan"
//     "jesus"
    

// ]

// function ciclowhile(num) {
//     while(3 < 5)
//     console.log("ciclo activado");
// }

// function tabla(numero){
//     let multiplicar=0;
//     for(let o=0;o<numero;o=o+1){
//         for(let num=0;num<=10;num=num+){
//             multiplicar=o*num;
//             console.log(o +" * "+ num+" = "+multiplicar)
//         }
//     }
// }

// tabla(2);

// let longitudDeString = prompt ("ingrese un numero")

// function generarCaracter() {
//     let codigoCaracter = Math.floor(Math.random() * (126 - 33)) + 33;
//     let caracter = String.fromCharCode(codigoCaracter)
//     return caracter;
// }



// function generarCaracter(longitud) {

//     let stringResult = "";
//     for (let index = 0; index < longitud; index++) {
        
//         stringResult += generarCaracter();
//     };
//     return stringResult;
// };

// console.log(generarCaracter(longitudDeString));


// let numerodDelaTabla = prompt ("elige un tabla de multiplicar del 1 al 10");


// function crearTabla(tablaDeMultiplicar) {
//     const tabla = Number(tablaDeMultiplicar);

//     for (let index = 0; index <= 10; index++) {
//         tablaDeMultiplicar * index
//         console.log(`${tablaDeMultiplicar} x ${index} = ${tablaDeMultiplicar * index}`);
//     }

// };

// crearTabla(numerodDelaTabla)


// primero hacer la solicitud del numero
// crear una funcion que nos de numeros pares entre 1 y 10
// encontrar la forma de saber si el numero si es par o inpar
// imprimir numeros pares entre los numeros que metimos

// let solicitud =prompt("ingresa un numero para saber sus numeros pares")
// function encontrarPar(rangoDeNumeros) {
//     rangoDeNumeros =Number(rangoDeNumeros)
//     for (let index = 1; index <= rangoDeNumeros; index++) {
//        if (index % 2 === 0){

//         console.log(index); 
//     }
//     }
// }

// encontrarPar(solicitud)


// solicitar una cantidad de numeros 
// separar los numeros ingresados 
// crear una funcion que sume los numeros ingresados
// sumar los numeros ingresados
// imprimir la suma de los numeros ingresados

// let numerosIngresados =prompt("Ingresa una cantidad de numeros")
//     function transformarCadena (numerosRecibidos){
//        console.log(numerosRecibidos.split(""));
        
// }

// transformarCadena(numerosIngresados)


// input
let koders = [
    ['jose', 'de anda'],
    ['danny', 'vazquez'],
    ['Aaron', 'Enciso']
];
// -----
//output
let result = [
    {
        nombre: 'jose',
        apellido: 'de anda'
    },
    {
        nombre: 'danny',
        apellido: 'vazquez'
    },
    {
        nombre: 'Aaron',
        apellido: 'Enciso'
    }
];
