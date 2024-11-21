import Pessoa from "./Pessoa.js";

class NPC extends Pessoa {

    constructor(pedido) {
        this.pedido = pedido;
    }
    
    generateID() {
        return Math_floor(Math.random() * 999) + 1;
    }

    #falarDicas() {
        if(pedido == true) {
            console.log(`${this.nome} tem uma dica pra falar`);
        }
    }
}