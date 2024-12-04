import { Router } from "express";
import Aluno from "../models/Aluno.js";
import Dev from "../models/Dev.js";
import Sabotador from "../models/Sabotador.js";

const cadastroRoutes = Router();

// Lista os alunos cadastrados
cadastroRoutes.get("/listar/alunos", (req, res) => {
    if (alunos.length === 0) {
      return res.status(404).json({ message: "Nenhum aluno cadastrado." });
    }
  
    // Cria um novo array com base no array de alunos
    const listaAlunos = alunos.map((aluno) => ({
      Nome: aluno.nome,
      Apelido: aluno.apelido,
      Grupo: aluno.grupo,
      Status: aluno.estaVivo ? "Vivo" : "Eliminado",
      LocalAtual: aluno.localAtual,
    }));
  
    return res.status(200).json({ alunos: listaAlunos });
  });
  
// Lista os jogadores cadastrados
cadastroRoutes.get("/listar/jogadores", (req, res) => {
    if (jogadores.length === 0) {
      return res.status(404).json({ message: "Nenhum jogador cadastrado." });
    }
  
    // Cria um novo array com base no array de jogadores
    const listaJogadores = jogadores.map((jogador) => ({
      Nome: jogador.nome,
      Apelido: jogador.apelido,
      Grupo: jogador.grupo,
      Tipo: jogador.constructor.name, // Sabotador ou Dev
      Status: jogador.estaVivo ? "Vivo" : "Eliminado",
      LocalAtual: jogador.localAtual,
      Votos: jogador.votos,
    }));
  
    return res.status(200).json({ jogadores: listaJogadores });
  });
  

cadastroRoutes.post("/adicionar", (req, res) => {

});

cadastroRoutes.get("/listar", (req, res) => {

});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;