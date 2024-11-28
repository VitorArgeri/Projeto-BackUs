import Chat from './Chat.js';

const jogadores = [ ];

const chat = new Chat();

for (let i = 0; i < jogadores.length; i++) {
    const { nome, tipo, estado, grupo } = jogadores[i];
    console.log(`Nome: ${nome}, Tipo: ${tipo}, Estado: ${estado}, Grupo: ${grupo}`);
}

chat.adicionarMensagem("João entrou no jogo.");
chat.adicionarMensagem("Maria saiu do jogo.");

chat.mostrarHistorico();
console.log(chat.historico);

export { jogadores, chat };