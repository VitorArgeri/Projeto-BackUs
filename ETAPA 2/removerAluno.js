import Aluno from './ListaAlunos.js';

class RemoverAluno extends Aluno {

    generateID() {
        return Math.floor(Math.random() * 999) + 1;
    }

    removerAluno() {
        if (this.morto === true) {
            console.log(`O aluno ${this.nome} foi removido do jogo!`);
        }
    }
}

export default RemoverAluno;