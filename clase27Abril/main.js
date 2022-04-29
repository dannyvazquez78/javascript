// const persona = {
//     name: "freddy",
//     lastName: "krueger",
//     saludar: function (paras) {
//         console.log("hola");
//     },
// };

// persona.saludar();

// function Persona (name, lastName, edad){
//    this.nombre = name;
//    this.lastName = lastName;
//    this.edad = edad
// //    this.saludar = function (param){
// //     console.log(hola);
// //    }
   
// }

// Persona.prototype.saludar = function (param) {
//     console.log(`hola soy ${this.name}` );
// }

// const persona1 = new Persona("Jason,", "vorhees", 10)
// // const persona2 = new Persona("Penny,", "Wise",)

// persona1.saludar()
// console.log(persona1);
// // console.log(persona1);
// // console.log(persona2);
// // console.log(persona);


// const koders = [
//     {
//       name: "Harold",
//       lastName: "López",
//       birthday: "1996/06/24",
//       generation: 9,
//       bootcamp: "JavaScript",
//       scores: [
//         {
//           module: "Frontend",
//           score: 90
//         },
//         {
//           module: "Backend",
//           score: 80
//         },
//         {
//           module: "Cloud",
//           score: 80
//         }
//       ]
//     },
//     {
//       name: "Arnold",
//       lastName: "Osborn",
//       birthday: "1998/05/12",
//       generation: 1,
//       bootcamp: "Python",
//       scores: [
//         {
//           module: "Frontend",
//           score: 90
//         },
//         {
//           module: "Backend",
//           score: 100
//         },
//         {
//           module: "Cloud",
//           score: 100
//         }
//       ]
//     },
//     {
//       name: "Peter",
//       lastName: "Parker",
//       birthday: "1994/10/26",
//       generation: 10,
//       bootcamp: "JavaScript",
//       scores: [
//         {
//           module: "Frontend",
//           score: 100
//         },
//         {
//           module: "Backend",
//           score: 95
//         },
//         {
//           module: "Cloud",
//           score: 80
//         }
//       ]
//     },
//     {
//       name: "Homer",
//       lastName: "Simpson",
//       birthday: "1996/06/24",
//       generation: 1,
//       bootcamp: "Python",
//       scores: [
//         {
//           module: "Frontend",
//           score: 98
//         },
//         {
//           module: "Backend",
//           score: 100
//         },
//         {
//           module: "Cloud",
//           score: 70
//         }
//       ]
//     },
//     {
//       name: "Ren",
//       lastName: "López",
//       birthday: "1996/06/24",
//       generation: 9,
//       bootcamp: "JavaScript",
//       scores: [
//         {
//           module: "Frontend",
//           score: 80
//         },
//         {
//           module: "Backend",
//           score: 90
//         },
//         {
//           module: "Cloud",
//           score: 100
//         }
//       ]
//     }
//   ];
  

// let x = myFunction(7, 7);

// function myFunction(a, b) {
//   return a * b;
// }

// console.log(x);




// function myFunction() {
  
// }console.log(1);
//   console.log(2);
//   console.log(3);


// function unaFuncion(){
//   // console.log(1);
//   return "hola"
// }

// const saludo = unaFuncion()
// console.log(saludo);

// function suma(a, b =20){
//   return a + b;
// }

// const resultado = suma (5)
// console.log(resultado);

// const otrafuncion = function(){
//   console.log(1);
// }
// otrafuncion()

// function saludar() {
//   return "hola, me llamo Daniel"
// }

// const saludo = saludar()
// console.log(saludo);


// const saludar = function (){
//   console.log("me llamo daniel");
// }

// saludar()

let arrayPersons = [
  {
      name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
  },
  {
      name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
  },
  {
      name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
  },
  {
      name: "Jon", age: 22, vaccinated: true, gender: "hombre"
  },
  {
      name: "Brian", age: 20, vaccinated: false, gender: "hombre"
  },
  {
      name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
  },
  {
      name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
  },
  {
      name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
  },
  {
      name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
  },
  {
      name: "Harold", age: 45, vaccinated: true, gender: "hombre"
  },
  {
      name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
  },
  {
      name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
  },
  {
      name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
  },
  {
      name: "Lila", age: 18, vaccinated: true, gender: "mujer"
  },
  {
      name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
  },
]

// lista de Vacunados

const result = arrayPersons.filter( (item) => {
    if(item.vaccinated === true){
        return item.name
    }
    // return 'no se vacuno'
});
console.log(result)


// Edad promedio Vacunados

const promedio = arrayPersons.reduce( (accum, item) => {
  if(item.vaccinated === true) {
      return accum + item.age
  }
  return accum
  // return accum
}, 0);
const resultado = promedio / arrayPersons.length
console.log(resultado)





// const vaccinated = arrayPersons.reduce ((accum, item, index, arr)=> {
//   if(item.vaccinated === true){
//     console.log(item.name);
//     return item.name
//   }

// },[ ])

// console.log(vaccinated);

// // lista de edades Vacunados

// const promEdadVacunados = arrayPersons.reduce ((accum, item, index, arr)=> {
//   if(item.vaccinated === true){
//     // console.log(item.age);
//     const sumatoriaObjeto = arrayPersons.reduce((acum, item)=>{
    
//         return {edad: acum.age + item.age};
//     console.log(sumatoriaObjeto);
//   });
//   }
// })

// // let promedioEdad = sumatoriaObjeto.age / arrayPersons.length;
// // console.log(promedioEdad);

// // lista de edades Vacunados menores de 30

// const vacunadosMen30 = arrayPersons.reduce ((accum, item, index, arr) => {
//   if (item.vaccinated === true){
//     if(item.age < 30)
//     console.log(item.name + " su edad es " + item.age  );
//   }


// })


// // // lista de edades NO Vacunados

// const promEdadNoVacunados = arrayPersons.reduce ((accum, item, index, arr) =>{
  
//   if(item.vaccinated === false){
//     console.log(item.age);
   
//   }
// })

// const arreglo = [
//   {
//     nombre: "John Doe",
//     edad: 50
//   },
//   {
//     nombre: "Pedro",
//     edad: 20
//   },
//   {
//     nombre: "Juanita",
//     edad: 22
//   }
// ];

// const sumatoriaObjeto = arreglo.reduce(function(acum, item) {
//   return {edad: acum.edad + item.edad};
// });



// let promedioEdad = sumatoriaObjeto.edad / arreglo.length;
// console.log(promedioEdad);










