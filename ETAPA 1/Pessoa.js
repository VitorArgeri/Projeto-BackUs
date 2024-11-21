import Pessoa from "./Jogo.js";

class Pessoa {

    constructor(nome, sexo, idade, altura, ganhou, morto, jogar)  {
        this.id = this.generateID();
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.ganhou = ganhou;
        this.jogar = jogar;
    }

    generateID() {
        return Math_floor(Math.random() * 999) + 1;
    }

    Andar() {
        console.log(`${this.nome} está andando`);
    }

    vaiJogar() {
        if(vaiJogar == true) {
            console.log(`${this.nome} irá jogar`)
        } else {
            console.log(`${this.nome} não irá jogar`)
        }
    }
}

export default Pessoa