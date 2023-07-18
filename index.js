const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 580,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// RESPUESTAS
//Ejercicio a)
const pizzasImpares = pizzas.filter ((pizza) => {
  if (pizza.id % 2 !== 0) {
    console.log(pizza.nombre + " " + "esta es una pizza impar");
  }
})

//Ejercicio b)
const pizzaMenos600 = pizzas.find ((pizza) => {
  if (pizza.precio <600) {
    console.log(pizza.nombre + " " + "vale menos que $600");
  }
} )

//Ejercicio c)

pizzas.forEach ((pizza) => {
  return console.log(pizza.nombre + " " + pizza.precio);
})

//Ejercicio d)

pizzas.forEach ((pizza) => {
  return pizza.ingredientes.forEach ((ingrediente) => {
    console.log(pizza.nombre + " " + "lleva"+ " "+ pizza.ingredientes);
  });
})