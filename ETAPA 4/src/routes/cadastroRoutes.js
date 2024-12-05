import { Router } from "express";
import Aluno from "../models/Aluno.js";
import Dev from "../models/Dev.js";
import Sabotador from "../models/Sabotador.js";

const cadastroRoutes = Router();

const jogadores = [
  {
    Nome: "Miguel",
    Apelido: "Sarti",
    Grupo: "Equipe 5",
    Status: "Vivo",
    LocalAtual: "Sala 4"
  },
  {
    Nome: "Pablo",
    Apelido: "Pablodelgado26",
    Grupo: "Equipe 5",
    Status: "Morto",
    LocalAtual: "Sala 5"
  },
  {
    Nome: "Vitor",
    Apelido: "Vitao",
    Grupo: "Equipe 5",
    Status: "Vivo",
    LocalAtual: "Refeitório"
  },
  {
    Nome: "Vinicius Rocha",
    Apelido: "Rocha",
    Grupo: "Equipe 5",
    Status: "Morto",
    LocalAtual: "Recepção"
  },
  {
    Nome: "Vinicius Pereira",
    Apelido: "Pereira",
    Grupo: "Equipe 5",
    Status: "Vivo",
    LocalAtual: "Banheiro"
  },
  {
    Nome: "Raphaelle",
    Apelido: "Rapha",
    Grupo: "Equipe 5",
    Status: "Vivo",
    LocalAtual: "Recepção"
  },
];

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
  const { tipo, nome, apelido, grupo, estaVivo, localAtual } = req.body;

  if (!tipo || !nome || !apelido || !grupo || estaVivo === undefined || !localAtual) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  const novoCadastro = {
    nome,
    apelido,
    grupo,
    estaVivo,
    localAtual,
  };

  if (tipo === "aluno") {
    alunos.push(novoCadastro);
  } else if (tipo === "jogador") {
    jogadores.push(novoCadastro);
  } else {
    return res.status(400).json({ message: "Tipo inválido. Deve ser 'aluno' ou 'jogador'." });
  }

  return res.status(201).json({ message: "Cadastro adicionado com sucesso." });
});


cadastroRoutes.put("/atualizar", (req, res) => {

  const { nome, apelido, grupo, estaVivo, localAtual } = req.body;

  if (!nome || !apelido || !grupo || estaVivo === undefined || !localAtual) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios." });
  }

  const aluno = alunos.find(aluno => aluno.nome === nome);

  if (!aluno) {
    return res.status(404).json({ message: "Aluno não encontrado." });
  }

  aluno.apelido = apelido;
  aluno.grupo = grupo;
  aluno.estaVivo = estaVivo;
  aluno.localAtual = localAtual;

  return res.status(200).json({ message: "Aluno atualizado com sucesso." });
});

cadastroRoutes.delete("/remover", (req, res) => {
  const { nome } = req.body;
    
  const aluno = alunos.find((aluno) => aluno.nome === nome);
      if (!aluno) {
        return res
          .status(404)
          .json({ message: `Aluno com nome ${nome} não encontrado!` });
      }
  
      alunos = alunos.filter((aluno) => aluno.nome !== nome);
    
      return res.status(200).json({
        message: "Aluno removido com sucesso!",
        aluno,
      });
    });

export default cadastroRoutes;