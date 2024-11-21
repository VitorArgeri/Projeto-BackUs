import Pessoa from "./Pessoa.js";

class Aluno extends Pessoa{
    constructor(funcao, morto) {
        this.funcao = funcao;
        this.morto = morto;
    }

    verFuncao() {
        console.log(`${this.nome} irá jogar como ${this.funcao}`)    
    }

    Votar() {
        console.log(`${this.nome} votou`)
    }

    Morrer() {
        if(morto = true) {
            console.log(`${this.nome} morreu`);
        } else {
            console.log(`${this.nome} está vivo`);
        }
    }
}

export default Aluno