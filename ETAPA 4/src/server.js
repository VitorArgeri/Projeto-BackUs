import express from "express";
import { config } from "dotenv";

config()
import rotas from ".routes/indexRoutes.js";

const serverPort = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(rotas);

const gameInstance = new Jogo();

gameInstance.lugares = [
  "Recepção",
]

export default gameInstance;
