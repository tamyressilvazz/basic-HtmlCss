// const eventosStelar = new Array(
//     'tsParty',
//     'diskMTV',
//     'beijaSapo',
//     'mtvVerao',
//     'anos2K'
// );

// let nome = 'Leticia Biroli';
// let idade = 18;

// if (idade < 18) {
//     console.log(eventosStelar);
//     console.log("Menor de idade não está autorizado");
// }else{
//     console.log(`Você comprou ${eventosStelar[0]}.`);
//     eventosStelar.splice(0,1)
//     console.log(`Eventos restantes: ${eventosStelar}`);
// }

const salario = 3300.0;

if(salario < 2600.0){
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");
}

else if(salario > 2600.0 && salario < 3750.0){
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
}