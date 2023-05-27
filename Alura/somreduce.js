// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calculaMedia(notasSala) {
//     const somaNotas = notasSala.reduce((acumulador, nota)=> {
//         return acumulador + nota;
//     }, 0);
//     const media = somaNotas / notasSala.length;
//     return media;
// }

// console.log(`Média JS: ${calculaMedia(salaJS)}`);
// console.log(`Média Java: ${calculaMedia(salaJava)}`);
// console.log(`Média Python: ${calculaMedia(salaPython)}`);

const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170