const alunos = ['Barbara', 'André', 'Mia', 'Fernando', 'Jão'];
const medias = ['10', '7', '9.8', '7.9', '8.85'];

const alunosMedias = [alunos, medias];

function exibeNotaAluno(aluno) {
    // verifica se o Aluno existe dentro da lista
    if (alunosMedias[0].includes(aluno)) {
        // Desestruturação
        const [alunos, medias] = alunosMedias;
        // aqui encontramos o índice do aluno
        let alunoIndex = alunos.indexOf(aluno);
        // encontramos a média a partir do índice encontrado
        let mediaAlunoFind = medias[alunoIndex];
        // console.log(alunoIndex);
        console.log(`${aluno}, tem a média ${mediaAlunoFind}`);
    }else{
        console.log(`${aluno}, não está nessa classe!`);
    }
}

exibeNotaAluno("Mia");