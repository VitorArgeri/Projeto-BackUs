import Pessoa from './Pessoa.js';  

class Aluno extends Pessoa {
    constructor(nome, sexo, idade, altura, jogar, funcao, morto, ganhou) {
        super(nome, sexo, idade, altura, jogar);
        this.funcao = funcao;
        this.morto = morto;
        this.ganhou = ganhou;
    }

    verFuncao() {
        console.log(`${this.nome} irá jogar como ${this.funcao}`);    
    }

    Votar() {
        console.log(`${this.nome} votou`);
    }

    Morrer() {
        if (this.morto === true) { 
            console.log(`${this.nome} morreu`);
        } else {
            console.log(`${this.nome} está vivo`);
        }
    }
}

export default Aluno;
