function generateID() {
    return Math.floor(Math.random() * 10000);
}

function roletaDeFuncoes() {
    const funcoes = ['Inocente', 'Sabotador']; 
    return funcoes[Math.floor(Math.random() * funcoes.length)];
}

function iniciarJogo(alunos) {
    const jogadores = alunos.map(aluno => ({
        ...aluno,
        id: generateID(),
        funcao: roletaDeFuncoes(),  
        papel: 'jogador' 
    }));

    return jogadores;
}

export { iniciarJogo };
export { generateID };
