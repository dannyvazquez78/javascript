const arreglo = [
    {
      nombre: "John Doe",
      edad: 50
    },
    {
      nombre: "Pedro",
      edad: 20
    },
    {
      nombre: "Juanita",
      edad: 22
    }
  ];

const sumatoriaObjeto = arreglo.reduce(function(acum, item) => {
    return {edad: acum.edad + item.edad};
  });



let promedioEdad = sumatoriaObjeto.edad / arreglo.length;
console.log(promedioEdad);