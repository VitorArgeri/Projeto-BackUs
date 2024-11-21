import Aluno from './Aluno.js';  

class Sabotadores extends Aluno {

    constructor(nome, sexo, idade, altura, jogar, funcao, morto, ganhou) {
        super(nome, sexo, idade, altura, jogar, funcao, morto, ganhou); 
    }

    generateID() {
        return Math.floor(Math.random() * 999) + 1;  
    }

    Matar() {
        console.log(`${this.nome} matou um inocente`);
    }

    #Sabotar() {
        console.log(`${this.nome} sabotou`);
    }

    SabotarPublico() {
        this.#Sabotar();  
    }
}

export default Sabotadores;
