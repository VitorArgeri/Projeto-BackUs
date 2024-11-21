import Chat from './Chat.js';

// Array de objetos representando os jogadores
const jogadores = [
    { nome: 'João', tipo: 'dev', estado: 'Ativo', grupo: 1 },
    { nome: 'Maria', tipo: 'sabotador', estado: 'Inativo', grupo: 2 },
    { nome: 'Pedro', tipo: 'dev', estado: 'Ativo', grupo: 1 }
];

// Instância da classe Chat
const chat = new Chat();

// Função para listar os jogadores no console
function listarJogadores() {
    jogadores.forEach(jogador => {
        console.log(`Nome: ${jogador.nome}, Tipo: ${jogador.tipo}, Estado: ${jogador.estado}, Grupo: ${jogador.grupo}`);
    });
}

// Chama a função para listar os jogadores
listarJogadores();

// Adiciona mensagens ao histórico do chat
chat.adicionarMensagem("João entrou no jogo.");
chat.adicionarMensagem("Maria saiu do jogo.");

// Mostra o histórico de mensagens no console
chat.mostrarHistorico();

// Exporta os jogadores, o chat e a função listarJogadores para uso em outros módulos
export { jogadores, chat, listarJogadores };