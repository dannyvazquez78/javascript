// let calification = prompt("Ingresa una calificacion del 0 al 100");
// calification = Number(calification)
// switch (calification) {
//     case 60:
//         console.log("La calificacion es F lo sentimos no aprobaste")
//     break;
//     case 70:
//         console.log("La calificacion es D sigue esforzandote")
//     break;
//     case 80:
//         console.log("La calificacion es C  bien")
//     break;
//     case 90:
//         console.log("La calificacion es B muy bien")
//     break;
//     case 100:
//         console.log("La calificacion es A excelente")
//     break;
//     default:
//         console.log("Reingresa una calificacion correcta")
//     break;
// }


// let numero1 = Number(prompt("¿que cantidad en MXN deseas convertir?"))
// let pais = (prompt("¿A que país vas a viajar? USA, china, Inglaterra o Canada"))
// let USA = 20
// let china = 25
// let Inglaterra = 30
// let Canada = 22

// switch (numero1) {
//     case USA:
//         console.log("Tu dinero en moneda local es : "+  numero1 / USA)
//         break;

//     default:
//         console.log("no aplica ese pais");
// }


// function nameLength() {
// const longitud = prompt('Ingresa tu nombre completo').length; 

// console.log(longitud);
// }

// nameLength()


// let cadena = prompt("Escribe tu nombre");
// let numeroVocales = cadena.match(/[aeiou]/gi).length;

// console.log(numeroVocales);


// let string1 = "string 1";
// let string2 = "Some large string";
// if(string1.length>string2.length){
//   console.log("el string " + string1 +" es el más largo")
// }else{
//   console.log("el string \"" + string2 +"\" es el más largo")
// }

// let stringTwoWords = "Programación Javascript"
// let sliced = stringTwoWords.split(" ");
// if(sliced[0]>sliced[1]){
//   console.log(sliced[0]);
// }else{
//   console.log(sliced[1]);
// }

// let parrafo = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";
// let numeroEstudiante = parrafo.match(/estudiante/gi).length;
// console.log(numeroEstudiante)
// console.log(parrafo.replace(/estudiante/g,"koder"));


// let entrada = prompt("Escoge una operacion y dos numeros separados por una , ");
// let elementoSplit = entrada.split(",");
// console.log(elementoSplit);
// let operacion = elementoSplit[0]
// elementoSplit[1] =Number(elementoSplit[1])
// elementoSplit[2] =Number(elementoSplit[2])
// switch (operacion) {
//     case "suma":
//         console.log(elementoSplit[1]+elementoSplit[2])
//         break;
//     case "resta":
//             console.log(elementoSplit[1]-elementoSplit[2])
//          break;
//     case "multiplicacion":
//                 console.log(elementoSplit[1]*elementoSplit[2])
//          break;
//     case "division":
//             console.log(elementoSplit[1]/elementoSplit[2])
//         break;
//     default: console.log("Introduce una operacion,  numero1 , numero2")
//         break;
// }



// let firstBatch = 5
// let secondBatch = 10

// let count = firstBatch + secondBatch

// console.log(count);

// let myAge = 43
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge);

// let bonusPoints = 50
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints);

// function countdown () {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// // setting up the race second time

// countdown()

// function printNumber (){
//     console.log(42)

// }

// printNumber()


//     let lap1 = 34
//     let lap2 = 33
//     let lap3 = 36
// function sumLaps (){
//     console.log(lap1 + lap2 + lap3)
// }

// sumLaps()

let lapsCompleted = 0

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
}
incrementLap()
incrementLap()
incrementLap()
console.log(lapsCompleted)
