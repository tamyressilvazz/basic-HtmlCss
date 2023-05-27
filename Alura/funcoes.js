// declarando a funcao com parametro
function soma(val1, val2) {
    resultado = val1 + val2;
    return resultado;
}

// chamando a funcao
// let val1 = 8;
// let val2 = 2;
// console.log(soma(val1, val2));

// console.log(soma(8,3));

// funcao que mostra uma frase
// function frase() {
//     // se eu passasse só o console log com a string dentro
//     // ele ia mostrar a frase e em seguida undefined, porque n tinha sido declado
//     let frase = "Show me your face, say something";
//     return frase;
// }

// console.log(frase());


// function words(nome, idade) {
//     let words = `Seu nome é ${nome} e tem ${idade} anos.`
//     return words;
// }

// let nome = "Alana";
// let idade = 13;
// console.log(words(nome, idade));
// console.log(words("alana", 13));

// function cumprimentar(){
//     console.log('oi gente!')
// }
   
// cumprimentar()

// function cumprimentaPessoa(pessoa){
//     console.log(`oi, ${pessoa}!`);
// }

// cumprimentaPessoa('Helena');

function comParametro(param) {
    console.log(param)
}
//Em JavaScript, os parâmetros de funções tem undefined como valor predefinido.
comParametro()