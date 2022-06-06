Array.prototype.mapClone = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
const nomes = [
  { nome: "Julio", idade: 20 },
  { nome: "algo", idade: 20 },
  { nome: "ano", idade: 20 },
];
const apenasNome = nomes.mapClone((obj) => obj.nome);

console.log(apenasNome);
