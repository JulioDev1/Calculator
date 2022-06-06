//filter, map e reduce
const numeros = [0, 1, 2, 3, 5, 10, 11, 15, 20];

const numerofiltrados = numeros.filter((valor, indice, array) => {
  console.log(valor, indice);
  valor > 10;
});
// console.log(numerofiltrados);
