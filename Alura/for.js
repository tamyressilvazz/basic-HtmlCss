// imprima o índice 
// const numeros = [100, 200, 300, 400, 500, 600];

// for (let index = 0; index < numeros.length; index++) {
//     const listaNumeros = numeros[index];  
//     console.log(listaNumeros);
// }

// media com for
const notas = [10, 6.8, 8, 7.5];

let somaNotas = 0;

for (let index = 0; index < notas.length; index++) {
    somaNotas += notas[index];
}

function mediaNotas() {
    resultCalculo = somaNotas / notas.length;
    return resultCalculo
}

console.log(`A média das notas são ${mediaNotas()}`);