// let listCities = ['Recife', 'Salvador', 'Santa Catarina'];
// // Se der undefined é porque não tem na lista
// mostra o que tem dentro da posição 2 no array
// console.log(listCities[2]);

// const listaComponentes = new Array(
//     'fone',
//     ' mouse',
//     ' teclado'
// );

// listaComponentes.push(' microfone'); // adiciona no final da lista de array
// const textComponents = 'Os itens básicos de um computador são:';

// console.log(`${textComponents} ${listaComponentes}`);

// listaComponentes.splice(0, 1); // deleta da lista o elemento na posição 0 e deleta 1 elemento
// console.log(listaComponentes);


// animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

// animaisDoAquario.splice(1,0,'🐠')
// animaisDoAquario.splice(3,2,'🐟')

// console.log(animaisDoAquario)

// const funcionarios = [
//     ["Ana", "Juliana", "Leonardo"],
//     [30, 35, 28]
// ];

// console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`);

//Slice não altera o array original, retorna uma cópia do array original
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// vai do índice 0 até o índice 1
// console.log(animals.slice(0,2));
// vai do índice 1 até o índice 2
// console.log(animals.slice(1,3));
//vai do 0 até o 3
// console.log(animals.slice(0,4));
// mostra todos os elementos, vai do 0 até o 4
console.log(animals.slice(0,5));
