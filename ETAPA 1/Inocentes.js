import Aluno from './Aluno.js'; 

class Inocentes extends Aluno {
    constructor(nome, sexo, idade, altura, jogar, funcao, morto, ganhou) {
        super(nome, sexo, idade, altura, jogar, funcao, morto, ganhou);
    }

    generateID() {
        return Math.floor(Math.random() * 999) + 1; 
    }

    Consertar() {
        console.log(`${this.nome} está consertando`);
    }
}

export default Inocentes;
