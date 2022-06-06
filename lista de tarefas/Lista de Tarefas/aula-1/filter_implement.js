Array.prototype.filt = function (callback) {
  let result = [];
  for (let element of this) {
    if (callback(element)) {
      result.push(element);
    }
  }
  return result;
};
const arrayQualquer = [
  { nome: "Julio", idade: 15 },
  { nome: "jdlaskjals", idade: 19 },
  { nome: "jdlaskjals", idade: 19 },
];
const maior = arrayQualquer.filt(function (obj) {
  return obj.idade > 15;
});
console.log(maior);
