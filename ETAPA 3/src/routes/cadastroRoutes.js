import { Router } from "express";


const cadastroRoutes = Router();

cadastroRoutes.get("/", (req, res) => {
    return res.status(200)
    .send( alunos )
});

cadastroRoutes.get("/", (req, res) => {
    return res.status(200)
    .send( jogadores )
});

cadastroRoutes.get("/", (req, res) => {
    return res.status(200)
    .send( grupos.length )
});

cadastroRoutes.post("/chat/enviar", (req, res) => {
    const { remetente, mensagem } = req.body;
    const novaMensagem = { id: Math.floor(Math.random() * 1000000), remetente, mensagem, timestamp: new Date() };
    chat.push(novaMensagem);
    res.status(201).json(novaMensagem);
});

cadastroRoutes.get("/chat/historico", (req, res) => {
    res.status(200).json(chat);
});

cadastroRoutes.get("/mostrarAlunos", (req, res) => {
    const { grupo, nome } = req.query;
    let resultado = alunos;
    if (grupo) resultado = resultado.filter(aluno => aluno.grupo === grupo);
    if (nome) resultado = resultado.filter(aluno => aluno.nome.includes(nome));
    resultado.sort((a, b) => a.grupo - b.grupo || a.nome.localeCompare(b.nome));
    res.status(200).json(resultado);
});

cadastroRoutes.delete('/:nome', (req, res) => {
    const { nome } = req.params;

    const Jogador = jogadores.find((suspect) => suspect.id == id)

    if(!Jogador) {
        return res.status(404).send({
            message: "Jogador não Encontrado!"
        });
    }

    jogadores = jogadores.filter((suspect) => suspect.id != id)

    return res.status(200).send({
        message: 'Jogador Deletado!',
    })
});

cadastroRoutes.get("/iniciarJogo", (req, res) => {
    jogadores = alunos.map(aluno => ({ nome: aluno.nome, grupo: 'jogador' }));
    const sabotadores = jogadores[Math.floor(Math.random() * jogadores.length)];
    sabotadores.grupo = 'sabotador';
    res.status(200).json(jogadores);
});

export default cadastroRoutes;
