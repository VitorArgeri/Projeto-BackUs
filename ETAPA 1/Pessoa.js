import Jogo from './Jogo.js';  

class Pessoa {
    constructor(nome, sexo, idade, altura, jogar)  {
        this.id = this.generateID();
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.jogar = jogar;
    }

    generateID() {
        return Math.floor(Math.random() * 999) + 1;  
    }

    Andar() {
        console.log(`${this.nome} está andando`);
    }

    vaiJogar() {
        if (this.jogar === true) {
            console.log(`${this.nome} irá jogar`);
        } else {
            console.log(`${this.nome} não irá jogar`);
        }
    }

    jogarJogo(jogo) {
        if (this.jogar) {
            jogo.Iniciar();  
        } else {
            console.log(`${this.nome} não quer jogar ${jogo.nome}`);
        }
    }
}

export default Pessoa;
