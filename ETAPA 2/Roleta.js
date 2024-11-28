const generateID = () => Math.floor(Math.random() * 10000);

const roletaDeFuncoes = () => ['Inocente', 'Sabotador'][Math.floor(Math.random() * 2)];

const iniciarJogo = (alunos) => alunos.map(aluno => ({
  ...aluno,
  id: generateID(),
  funcao: roletaDeFuncoes(),
  papel: 'jogador'
}));

export { iniciarJogo, generateID };