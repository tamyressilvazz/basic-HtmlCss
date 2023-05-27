const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;
// função callback
//Essa função tem o nome de callback e vai ser executada 
//para cada elemento do array, sendo que pode receber de 1 a 3 argumentos;
// o elemento, o índice e o array atual, respectivamente
notas.forEach(nota => {
    somaNotas += nota;
});

function media(somaNotas) {
    let media = somaNotas / notas.length;
    return media;
}
console.log(`A média é ${media(somaNotas)}`);