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

});

export default cadastroRoutes;