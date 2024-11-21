// Classe Chat para gerenciar o histórico de mensagens
class Chat {
    constructor() {
        this.historico = []; // Inicializa o histórico de mensagens como um array vazio
    }

    // Método para adicionar uma mensagem ao histórico
    adicionarMensagem(mensagem) {
        this.historico.push(mensagem);
    }

    // Método para mostrar o histórico de mensagens no console
    mostrarHistorico() {
        this.historico.forEach(mensagem => console.log(mensagem));
    }
}

console.log('Chat foi carregado com sucesso!');

export default Chat;