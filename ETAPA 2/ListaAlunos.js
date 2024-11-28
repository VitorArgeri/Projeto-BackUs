import { iniciarJogo } from './Roleta.js';

const alunos = [
  { nome: 'Vitor Argeri', sexo: 'Masculino', idade: '17', altura: '173', jogar: true, morto: true, ganhou: true },
  { nome: 'Miguel Sarti', sexo: 'Masculino', idade: '16', altura: '180', jogar: true, morto: true, ganhou: false },
  { nome: 'Vinícius Pereira', sexo: 'Masculino', idade: '17', altura: '170', jogar: true, morto: true, ganhou: false },
  { nome: 'Vinícius Rocha', sexo: 'Masculino', idade: '17', altura: '178', jogar: false, morto: false, ganhou: false },
  { nome: 'Pablo Delgado', sexo: 'Masculino', idade: '16', altura: '183', jogar: true, morto: false, ganhou: true }
];

export default iniciarJogo(alunos);