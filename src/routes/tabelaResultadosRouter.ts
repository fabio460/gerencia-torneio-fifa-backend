import { Router } from "express";

import { criar, deletar, listar, listarPorIdDoCampionato } from "../controllers/tabeladeResultadosController";
const tabelaDeResultadosRouter = Router()

tabelaDeResultadosRouter.get('/', listar)
tabelaDeResultadosRouter.post('/listarPorIdDoCampionato', listarPorIdDoCampionato)
tabelaDeResultadosRouter.delete('/deletar', deletar)
tabelaDeResultadosRouter.post('/criar', criar)

export default tabelaDeResultadosRouter