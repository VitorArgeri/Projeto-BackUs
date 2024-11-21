import Pessoa from './Pessoa.js';  

class NPC extends Pessoa {
    constructor(nome, sexo, idade, altura, jogar, pedido) {
        super(nome, sexo, idade, altura, jogar);  
        this.pedido = pedido;  
    }
    
    generateID() {
        return Math.floor(Math.random() * 999) + 1; 
    }

    #falarDicas() {
        if (this.pedido === true) {  
            console.log(`${this.nome} tem uma dica pra falar`);
        }
    }

    falarDicasPublico() {
        this.#falarDicas(); 
    }
}

export default NPC;
