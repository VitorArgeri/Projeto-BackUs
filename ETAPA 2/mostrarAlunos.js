// Define a classe Aluno
class Aluno {
  // Construtor da classe Aluno, inicializa as propriedades nome e grupo
  constructor(nome, grupo) {
    this.nome = nome;
    this.grupo = grupo;
  }
}

// Define a classe Jogador que herda da classe Aluno
class Jogador extends Aluno {
  // Construtor da classe Jogador, inicializa as propriedades nome, grupo, tipo e estado
  constructor(nome, grupo, tipo = "normal", estado = "ativo") {

    super(nome, grupo); 
    // Chama o construtor da classe Aluno
    this.tipo = tipo; 
    // Define o tipo do jogador (padrão: 'normal')
    this.estado = estado; 
    // Define o estado do jogador (padrão: 'ativo')
  }
}

// Define a classe Chat
class Chat {
  // Construtor da classe Chat, inicializa a propriedade mensagens como um array vazio
  constructor() {
    this.mensagens = [];
  }

  // Método para adicionar uma mensagem ao chat
  adicionarMensagem(mensagem) {
    this.mensagens.push(mensagem);
  }

  // Método para exibir todas as mensagens do chat
  mostrarMensagens() {
    this.mensagens.forEach((msg) => console.log(msg));
  }
}

// Define a classe Jogo
class Jogo {
  // Construtor da classe Jogo, inicializa as propriedades alunos, jogadores, grupos e chat
  constructor() {
   // Lista de alunos cadastrados
    this.alunos = []; 
    // Lista de jogadores após o início do jogo
    this.jogadores = []; 
    // Quantidade total de grupos (padrão: 6)
    this.grupos = 6; 
     // Instância da classe Chat
    this.chat = new Chat();
  }

  // Método para exibir todos os alunos, agrupados e ordenados por grupo e nome
  mostrarAlunos(grupo = null, nome = null) {
    let alunosFiltrados = this.alunos;

    // Filtra os alunos pelo grupo, se fornecido
    if (grupo !== null) {
      alunosFiltrados = alunosFiltrados.filter(
        (aluno) => aluno.grupo === grupo
      );
    }

    // Filtra os alunos pelo nome, se fornecido
    if (nome !== null) {
      alunosFiltrados = alunosFiltrados.filter((aluno) => aluno.nome === nome);
    }

    // Agrupa os alunos por grupo
    const alunosAgrupados = alunosFiltrados.reduce((acc, aluno) => {
      if (!acc[aluno.grupo]) {
        acc[aluno.grupo] = [];
      }
      acc[aluno.grupo].push(aluno);
      return acc;
    }, {});

    // Ordena os grupos e os alunos dentro de cada grupo, e exibe os alunos
    Object.keys(alunosAgrupados)
      .sort()
      .forEach((grupo) => {
        console.log(`Grupo: ${grupo}`);
        alunosAgrupados[grupo]
          .sort((a, b) => a.nome.localeCompare(b.nome))
          .forEach((aluno) => {
            console.log(`  ${aluno.nome}`);
          });
      });
  }

  // Método para remover um aluno pelo nome
  removerAluno(nome) {
    this.alunos = this.alunos.filter((aluno) => aluno.nome !== nome);
  }

  // Método para exibir informações dos jogadores
  mostrarJogadores(dados) {
    this.jogadores.forEach((jogador) => {
      console.log(
        `Nome: ${jogador.nome}, Tipo: ${jogador.tipo}, Estado: ${jogador.estado}, Grupo: ${jogador.grupo}`
      );
    });
  }

  // Método para iniciar o jogo, convertendo alunos em jogadores e escolhendo um grupo como sabotadores
  iniciarJogo() {
    this.jogadores = this.alunos.map(
      (aluno) => new Jogador(aluno.nome, aluno.grupo)
    );
    const grupoSabotador = Math.floor(Math.random() * this.grupos) + 1;
    this.jogadores.forEach((jogador) => {
      if (jogador.grupo === grupoSabotador) {
        jogador.tipo = "sabotador";
      }
    });
  }
}

// Cria uma nova instância da classe Jogo
const jogo = new Jogo(); 
jogo.alunos.push(new Aluno("Vinicius Rocha", "VR")); // Adiciona um aluno à lista de alunos
jogo.alunos.push(new Aluno("Pablo Delgado", "PD")); // Adiciona um aluno à lista de alunos
jogo.alunos.push(new Aluno("Miguel Sarti", "MS")); // Adiciona um aluno à lista de alunos
jogo.alunos.push(new Aluno("Vitor Argeri", "VA  ")); // Adiciona um aluno à lista de alunos
jogo.alunos.push(new Aluno("Vinicius Pereira", "VP")); // Adiciona um aluno à lista de alunos

