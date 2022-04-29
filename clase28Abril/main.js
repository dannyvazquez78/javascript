const koders = [
    {
      name: "Harold",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 80
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Arnold",
      lastName: "Osborn",
      birthday: "1998/05/12",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 90
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    },
    {
      name: "Peter",
      lastName: "Parker",
      birthday: "1994/10/26",
      generation: 10,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 100
        },
        {
          module: "Backend",
          score: 95
        },
        {
          module: "Cloud",
          score: 80
        }
      ]
    },
    {
      name: "Homer",
      lastName: "Simpson",
      birthday: "1996/06/24",
      generation: 1,
      bootcamp: "Python",
      scores: [
        {
          module: "Frontend",
          score: 98
        },
        {
          module: "Backend",
          score: 100
        },
        {
          module: "Cloud",
          score: 70
        }
      ]
    },
    {
      name: "Ren",
      lastName: "López",
      birthday: "1996/06/24",
      generation: 9,
      bootcamp: "JavaScript",
      scores: [
        {
          module: "Frontend",
          score: 80
        },
        {
          module: "Backend",
          score: 90
        },
        {
          module: "Cloud",
          score: 100
        }
      ]
    }
  ];



//   function promedio(koderScores) {
//     const promedio = koderScores.reduce ((accum, item)=>{
//         return accum += item.score
//       },0)
//       const resultado = promedio / koderScores.length
//       return resultado 
//   }

//   function calcularEdad (birthday) {
//     console.log(new Date ().getFullYear());

//     const currentYear = 2022;
//     console.log(birthday);

//   }

//   function Koder ( name, lastName, bootcamp, birthday, scores ){

//     this.name = name;
//     this.lastName = lastName;
//     this.bootcamp = bootcamp;
//     this.edad = calcularEdad(birthday);
//     this.promedio = promedio(scores);
//     this.desglose = scores;
//   };



//   const koderListInstance = koders.map ((koder, index)=>{
//         // console.log(koder);
//         const { name, lastName, generation, birthday, scores } = koder
//         const koderInstance = new Koder(name, lastName, generation, birthday, scores);
//         console.log(koderInstance);
//         return koderInstance;
    
//   })

//   console.log(koderListInstance);


class Koder {
    constructor(name){
        this.name = name
}
saludar (){
    console.log(`hola soy ${this.name}`);
}
   
}
const koder1 = new Koder("ivan")
console.log(koder1);

//   // Teniendo la siguiente coleccion de koders genera una coleccion de objetos de tipo koder
// // Agregando ademas las siguientes funciones:

// // Prototipo koder

// // -Obtener la edad a partir de la fecha de nacimiento
// // -Obtener promedio de sus scores
// // -Tenga el name
// // -Tenga el lastName
// // -bootcamp

// // ----------

// // Obtener una coleccion de Koder que pertenezca a Javascript
// // Obtener una coleccion de Koder que pertenezca a Python