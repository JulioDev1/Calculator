Array.prototype.eoFiltrasfunction = function (callback) {
  let result = [];
  for (let element of this) {
    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
};

const array = [
  { nome: "Julio", idade: 15 },
  { nome: "jdlaskjals", idade: 19 },
  { nome: "jdlaskjals", idade: 19 },
];
const maior = array.eoFiltrasfunction(function (obj) {
  return obj.idade < 18;
});
console.log(maior);
