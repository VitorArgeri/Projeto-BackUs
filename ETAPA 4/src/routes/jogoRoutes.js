import { Routes } from "express";

const jogoRoutes = Routes();

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

}
);

jogoRoutes.post("/Eliminar", (req, res) => {

}
);

jogoRoutes.post("/votar", (req, res) => {

}
);

jogoRoutes.post("/Quiz", (req, res) => {

}
);

export default jogoRoutes;