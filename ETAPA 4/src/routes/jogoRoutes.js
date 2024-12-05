import { Router } from "express";

jogoRoutes.get("/mostrarPapel", (req, res) => {
    const { nome } = req.params;
    const jogador = jogadores.find(jogador => jogador.nome === nome);

    if (!jogador) {
        return res.status(404).json({ message: "Jogador não encontrado." });
    }

    res.status(200).json({ nome: jogador.nome, papel: jogador.tipo });
}
);

jogoRoutes.put("/mover", (req, res) => {
    const { nome, novaLocalizacao } = req.body;
    const jogador = jogadores.find(jogador => jogador.nome === nome);

    if (!jogador) {
        return res.status(404).json({ message: "Jogador não encontrado." });
    }

    jogador.localAtual = novaLocalizacao;
    res.status(200).json({ message: `Jogador ${nome} se moveu para ${novaLocalizacao}.`, jogador });
}
);

jogoRoutes.post("/chat", (req, res) => {
  const { usuario, mensagem } = req.body;

  if (!usuario || !mensagem) {
    return res.status(400).json({ message: "Usuário e mensagem são obrigatórios." });
  }

  mensagensChat.push({ usuario, mensagem, timestamp: new Date() });

  return res.status(201).json({ message: "Mensagem enviada com sucesso." });
});

jogoRoutes.post("/Eliminar", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ message: "Nome do jogador é obrigatório." });
  }

  const jogadorIndex = jogadores.findIndex(jogador => jogador.nome === nome);

//   Essa lógica é baseada em que caso o jogador não for encontrado, o método findIndex retorna -1 (-1 indica que nada foi encontrado).
  if (jogadorIndex === -1) {
    return res.status(404).json({ message: "Jogador não encontrado." });
  }

//   splice é um método que remove um elemento de um array. No caso, estamos removendo o jogador do array jogadores.
  jogadores.splice(jogadorIndex, 1);

  return res.status(200).json({ message: `Jogador ${nome} eliminado com sucesso.` });
});

jogoRoutes.post("/votar", (req, res) => {
  const { votante, votado } = req.body;

  if (!votante || !votado) {
    return res.status(400).json({ message: "Votante e votado são obrigatórios." });
  }

  //   Timestamp é a hora em que a resposta foi enviada.
  votos.push({ votante, votado, timestamp: new Date() });

  return res.status(201).json({ message: `Voto registrado com sucesso. ${votante} votou em ${votado}.` });
});

jogoRoutes.post("/Quiz", (req, res) => {
  const { usuario, resposta } = req.body;

  if (!usuario || !resposta) {
    return res.status(400).json({ message: "Usuário e resposta são obrigatórios." });
  }

  //   Timestamp é a hora em que a resposta foi enviada.
  respostasQuiz.push({ usuario, resposta, timestamp: new Date() });

  return res.status(201).json({ message: "Resposta do quiz registrada com sucesso." });
});

export default jogoRoutes;