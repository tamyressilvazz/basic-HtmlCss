const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5]; 
//retorna true ou false 
const reprovados = alunos.filter( (aluno, i) => {
    let mediaIndice = medias[i];
    return mediaIndice < 7;
});

console.log(reprovados);