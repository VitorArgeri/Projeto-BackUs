class Jogo {
    constructor(nome, participantes, local, ocorrendo, sorteio) {
        this.nome = nome;
        this.participantes = participantes;
        this.local = local;
        this.ocorrendo = ocorrendo;
        this.sorteio = sorteio;
    }
    
    Iniciar() {
        if (this.sorteio === true) {
            console.log(`O jogo ${this.nome} irá começar`);
        }
    }

    Encerrar() {
        if (this.ocorrendo === false) {
            console.log(`O jogo ${this.nome} encerrou`);
        }
    }
}

export default Jogo;
