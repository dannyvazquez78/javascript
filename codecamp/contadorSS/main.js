// document.getElementById("count-el").innerText = 5
let saveEl = document.getElementById("save-el") 
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl);


function increment(){
   
    count += 1
    countEl.textContent = count
    
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// let count = 5 
// console.log(count);


// let firstBatch = 5
// let secondBatch = 5
// let count = firstBatch + secondBatch
// console.log(count);

// let myAge = 43
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge);

// let count = 5
// count = count + 1


// console.log(count);


// let bonusPoints = 50
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints);



// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// countdown()

// // nextrace


// countdown()

// function llamarCuatroDos(){
//     console.log(42);
// }

// llamarCuatroDos()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function sumaLaps(){
//     let lasuma = lap1 + lap2 + lap3
//     console.log(lasuma);
// }
//  sumaLaps()


// let lapsCompleted = 0

// function sumaLaps(){
//     lapsCompleted = lapsCompleted + 1
   
// }

// sumaLaps()
// sumaLaps()
// sumaLaps()

// console.log(lapsCompleted);

