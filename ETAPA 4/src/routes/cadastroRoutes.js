import { Router } from "express";
import Aluno from "../models/Aluno.js";
import Dev from "../models/Dev.js";
import Sabotador from "../models/Sabotador.js";

const cadastroRoutes = Router();

cadastroRoutes.get("/listar", (req, res) => {
  const listaAlunos = alunos.map((aluno) => ({
      Nome: aluno.nome,
      Apelido: aluno.apelido,
      Grupo: aluno.grupo,
      Status: aluno.estaVivo ? "Vivo" : "Eliminado",
      LocalAtual: aluno.localAtual,
  }));

  const listaJogadores = jogadores.map((jogador) => ({
      Nome: jogador.nome,
      Apelido: jogador.apelido,
      Grupo: jogador.grupo,
      Status: jogador.estaVivo ? "Vivo" : "Eliminado",
      LocalAtual: jogador.localAtual,
  }));

  return res.status(200).json({ alunos: listaAlunos, jogadores: listaJogadores });
});

cadastroRoutes.post("/adicionar", (req, res) => {

});


cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {
  const { nome } = req.params;
  const index = jogadores.findIndex(jogador => jogador.nome === nome);

  if (index === -1) {
      return res.status(404).json({ message: "Jogador não encontrado." });
  }

  jogadores.splice(index, 1);
  res.status(200).json({ message: `Jogador ${nome} deletado com sucesso.` });
});

export default cadastroRoutes;