const generateID = () => Math.floor(Math.random() * 10000);

const roletaDeFuncoes = () => ['Inocente', 'Sabotador'][Math.floor(Math.random() * 2)];

const iniciarJogo = (alunos) => alunos.map(aluno => (
  aluno.jogar ? {
    ...aluno,
    id: generateID(),
    funcao: roletaDeFuncoes(),
    papel: 'jogador'
  } : aluno
));

export { iniciarJogo, generateID };