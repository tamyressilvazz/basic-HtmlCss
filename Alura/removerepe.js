const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);
//voltar a uma lista e não um set
const nomesAtualizados = [...meuSet];

console.log(nomesAtualizados);