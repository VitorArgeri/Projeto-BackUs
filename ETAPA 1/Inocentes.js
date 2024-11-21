import Aluno from "./Aluno.js";

class Inocentes extends Aluno{
    
    generateID() {
        return Math_floor(Math.random() * 999) + 1;
    }

    Consertar() {
        console.log(`${this.nome} está consertando`)
    }
}
