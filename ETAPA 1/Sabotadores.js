import Aluno from "./Aluno.js";

class Sabotadores extends Aluno{

    generateID() {
        return Math_floor(Math.random() * 999) + 1;
    }

    Matar() {
        console.log(`${this.name} matou um inocente`)
    }

    #Sabotar() {
        console.log(`${this.name} sabotou`)
    }

}