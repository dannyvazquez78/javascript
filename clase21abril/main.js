// const name1 = prompt("ingresa el nombre del koder1")

// const name2 = prompt("ingresa el nombre del koder2")

// console.log("el koder 1 es : " + name1);
// console.log("el koder 2 es : " + name2);

// const mentorsArray = [
//     {
//         name:"Ivan",
//         scores:[
//             {
//                 signature:"HTML",
//                 score:8
//             },
//             {
//                 signature:"CSS",
//                 score:10
//             },
//             {
//                 signature:"JS",
//                 score:8
//             },
//             {
//                 signature:"ReactJS",
//                 score:8
//             }
//         ]
//     },
//     {
//         name:"Alejandra",
//         scores:[
//             {
//                 signature:"HTML",
//                 score:8
//             },
//             {
//                 signature:"CSS",
//                 score:7
//             },
//             {
//                 signature:"JS",
//                 score:10
//             },
//             {
//                 signature:"ReactJS",
//                 score:10
//             }
//         ]
//     },
//     {
//         name:"Alan",
//         scores:[
//             {
//                 signature:"HTML",
//                 score:9
//             },
//             {
//                 signature:"CSS",
//                 score:9
//             },
//             {
//                 signature:"JS",
//                 score:10
//             },
//             {
//                 signature:"ReactJS",
//                 score:9
//             }
//         ]
//     },
//     {
//         name:"Oscar",
//         scores:[
//             {
//                 signature:"HTML",
//                 score:8
//             },
//             {
//                 signature:"CSS",
//                 score:10
//             },
//             {
//                 signature:"JS",
//                 score:9
//             },
//             {
//                 signature:"ReactJS",
//                 score:10
//             }
//         ]
//     }
//   ]

//  function getMentorsaAv (mentors) {
//       const numMentors = mentors.length
//       let htmlTotal = 0
//       let cssTotal = 0
//       let JSTotal = 0
//       let ReactJSTotal = 0

//       mentors.forEach((mentor, index)=> {
//           console.log(mentor.name);
//           mentor.scores.forEach((signature)=>{
//             if (signature.signature === "HTML") htmlTotal += signature.score

//             if (signature.signature === "CSS") cssTotal += signature.score

//             if (signature.signature === "JS") JSTotal += signature.score

//             if (signature.signature === "ReactJS") ReactJSTotal += signature.score

//           })
//       })
//   }



let cards = [7,4]

cards.push(6)
console.log(cards);

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)

console.log(messages);

messages.pop()
console.log(messages);
