import Jogo from "./models/Jogo.js";
import express from "express";
import { config } from "dotenv";
import rotas from "./routes/indexRoutes.js";

config();
const portaServidor = process.env.PORT || 4000;
const app = express();


const gameInstance = new Jogo();

gameInstance.lugares = [
  "Recepção",
]

export default gameInstance;

app.use(express.json());
app.use(rotas);

app.listen(portaServidor, () => {
  console.log(`🎉 Servidor iniciado em http://localhost:${portaServidor} 🎉`);
});
