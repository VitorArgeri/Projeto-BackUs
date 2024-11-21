import { iniciarJogo } from './Roleta.js';

let alunos = [
    {
        id: 0,  
        nome: 'Vitor Argeri',
        sexo: 'Masculino',
        idade: '17',
        altura: '173',
        jogar: true,
        funcao: '',  
        morto: true,
        ganhou: true
    },
    {
        id: 0,
        nome: 'Miguel Sarti',
        sexo: 'Masculino',
        idade: '16',
        altura: '180',
        jogar: true,
        funcao: '', 
        morto: true,
        ganhou: false,
    },
    {
        id: 0,
        nome: 'Vinícius Pereira',
        sexo: 'Masculino',
        idade: '17',
        altura: '170',
        jogar: true,
        funcao: '', 
        morto: true,
        ganhou: false,
    },
    {
        id: 0,
        nome: 'Vinícius Rocha',
        sexo: 'Masculino',
        idade: '17',
        altura: '178',
        jogar: false,
        funcao: '',  
        morto: false,
        ganhou: false,
    },
    {
        id: 0,
        nome: 'Pablo Delgado',
        sexo: 'Masculino',
        idade: '16',
        altura: '183',
        jogar: true,
        funcao: '',  
        morto: false,
        ganhou: true,
    }
];

alunos = iniciarJogo(alunos);

export default alunos;
