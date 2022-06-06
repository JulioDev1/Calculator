const dados = [
  { nome: "julio", idade: 16 },
  { nome: "algo", idade: 20 },
  { nome: "alguem", idade: 25 },
  { nome: "cois", idade: 32 },
];
const bigName = dados.filter((obj) => obj.idade > 20);
const lastNamea = dados.filter((obj) => {
  return obj.nome.toLowerCase().endsWith("o");
});
console.log(lastNamea);
