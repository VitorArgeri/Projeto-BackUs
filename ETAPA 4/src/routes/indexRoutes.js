import { Router } from "express";
import cadastroRoutes from "./cadastroRoutes.js";
import jogoRoutes from "./jogoRoutes.js";

const rotas = Router();

rotas.get("/", (req, res) => {
  res.status(200).send("Servidor rodando e pronto para uso!");
});


rotas.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada." });
});

export default rotas;