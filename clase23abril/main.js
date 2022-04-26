// const songsData = [
//     {
//         name: "¿Dónde jugarán los niños?",
//         band: "Maná",
//         releaseYear: "1992",
//         statistics: {
//             likes: 20000,
//             reproductions: 8000
//         },
//     },
//     {
//         name: "La muralla verde",
//         band: "Enanitos Verdes",
//         releaseYear: "1986",
//         statistics: {
//             likes: 21000,
//             reproductions: 19000
//         },
//     },
//     {
//         name: "Te Ví En Un Tren",
//         band: "Enanitos Verdes",
//         releaseYear: "1987",
//         statistics: {
//             likes: 20000,
//             reproductions: 23490
//         },
//     },
//     {
//         name: "Mariposa Traicionera",
//         band: "Maná",
//         releaseYear: "2002",
//         statistics: {
//             likes: 12000,
//             reproductions: 25690
//         },
//     },
//     {
//         name: "Rayando el Sol",
//         band: "Maná",
//         releaseYear: "1990",
//         statistics: {
//             likes: 12000,
//             reproductions: 18000
//         },
//     },
//     {
//         name: "La celula que explota",
//         band: "Jaguares",
//         releaseYear: "1999",
//         statistics: {
//             likes: 12000,
//             reproductions: 23421
//         },
//     },
//     {
//         name: "No dejes que...",
//         band: "Jaguares",
//         releaseYear: "1999",
//         statistics: {
//             likes: 12345,
//             reproductions: 10000
//         },
//     }
//   ]

//   function bandGroup(songsData){
//     let uniqueBandas = [];
//     songsData.forEach((cancion) => {
//         if (!uniqueBandas.includes(cancion.band)) {
//             uniqueBandas.push(cancion.band);
//         }
//     })
//     return uniqueBandas
//   }

//   let agrupacion = bandGroup(songsData)
// console.log(agrupacion)

// function bandSongs(cancion){
//     let manaSongs= []
//     let enanitosSongs=[]
//     let jaguaresSongs=[]
//     cancion.forEach((rola)=>{
//         if (rola.band === 'Maná'){
//             manaSongs.push(rola.name)
//         }
//         if (rola.band === 'Enanitos Verdes'){
//             enanitosSongs.push(rola.name)
//         }
//         if (rola.band === 'Jaguares'){
//             jaguaresSongs.push(rola.name)
//         }
//     })
//     return{
//         maná: manaSongs,
//         enanitosVerdes: enanitosSongs,
//         jaguares: jaguaresSongs, 
//     }
// }
// let recopilacion = bandSongs(songsData)
// console.log(recopilacion) 

// function filterReprodSongs(rola){
//     let mostReprodSongs = []
//     //meter funcion para encontrar num mas alto de reprod en una variable
//     let highestReprod = 0
//     rola.forEach((info)=>{
//         let reprod = (info.statistics.reproductions) 
        
//         if (reprod > highestReprod){
            
//             highestReprod= reprod
            
//         }
        
//     })
//     rola.forEach((info)=>{
//         let reprod = (info.statistics.reproductions) 
//         if (reprod === highestReprod){
//             mostReprodSongs.push({canción:info.name, reproducciones: highestReprod})
//         }
//     })
    
    
//     return mostReprodSongs
// }

// let topReprodSongs = filterReprodSongs(songsData)
// console.log (topReprodSongs)

// function filterLikedSongs(rola){
//     let mostLikedSongs = []
//     //meter funcion para encontrar num mas alto de reprod en una variable
//     let highestLikesQty = 0
//     rola.forEach((info)=>{
//         let likes = (info.statistics.likes) 
        
//         if (likes > highestLikesQty){
            
//             highestLikesQty= likes
            
//         }
        
//     })
    
//     rola.forEach((info)=>{
//         let likes = (info.statistics.likes)  
//         if (likes === highestLikesQty){
//             mostLikedSongs.push({canción:info.name, likes: highestLikesQty})
//         }
//     })
    
    
//     return mostLikedSongs
// }

// let topLikedSongs = filterLikedSongs(songsData)
// console.log (topLikedSongs)

// const numeros = [ 2, 5, 6 ]

// const numerosConCalculo = numeros.map((item, index, arr)=> {
//     return item + 3;
// }
// )

// console.log(numerosConCalculo);

// const numeros = [ 2, 5, 6 ]

// const numerosConCalculo = numeros.map((item, index, arr)=> {
//     if (item < 3){
//         return item
//     }
// })
// console.log(numerosConCalculo);

// const personas = [
//     {
//         Nombre: "Daniel",
//         Edad: 9
//     },
//     {
//         Nombre: "Juan",
//         Edad: 10
//     },
//     {
//         Nombre: "Pepito",
//         Edad: 15
//     }
// ]





// const nombres = personas.map((item) => {
//     return item.Nombre;
// }
// )

// console.log(nombres);

// const nombres = personas.map((item) => {
//     const frase = "hola soy " + item.Nombre + "y tengo" + item.Edad
//     return item.Nombre;
// }
// )

// console.log(frase);


const mentorsArray = [
    {
        name:"Ivan Morales Juarez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"Alejandra Ibañez Velazquez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Alan Ordonez Pana",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Raul Rodulfo orcasitas",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
  ]

  
const filterVocals = mentorsArray.filter (( mentor )=>{
  if (mentor.name[0].match (/[aeiou]/i)){
      return mentor;
  }
})

console.log(filterVocals);



