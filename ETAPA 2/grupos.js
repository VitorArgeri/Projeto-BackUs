class Grupos {
    constructor() {
        this.grupos = 6; // Quantidade total de grupos (padrão: 6)
    }

    mostrarJogadores(dados) {
        dados.forEach(jogador => {
            console.log(`Tipo: ${jogador.tipo}, Estado: ${jogador.estado}, Grupo: ${jogador.grupo}`);
        });
    }
}

// Exemplo de uso
const jogadores = [
    { tipo: 'Impostor', estado: 'Vivo', grupo: 1 },
    { tipo: 'Tripulante', estado: 'Morto', grupo: 2 }
];

const grupos = new Grupos();
grupos.mostrarJogadores(jogadores);
console.log(grupos.grupos);
export default Grupos;