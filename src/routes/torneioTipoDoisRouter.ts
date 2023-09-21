import { Router } from "express";
import { Request, Response } from "express";
import { atualizarRodada, atualizarTabela, criarTabela, deletarCampeonato, deletarTabela, gerarTorneio, listarCampeonato, listarRodadas, listarTabela } from "../controllers/torneioTipoDoisControles";
const torneioTipoDoisRouter = Router()

torneioTipoDoisRouter.get('/rodadas', listarRodadas)
torneioTipoDoisRouter.get('/listarCampeonato', listarCampeonato)
torneioTipoDoisRouter.post('/gerarTorneio', gerarTorneio)
torneioTipoDoisRouter.put('/atualizarRodada', atualizarRodada)
torneioTipoDoisRouter.delete('/deletarCampeonato/:id', deletarCampeonato)
torneioTipoDoisRouter.get("/listarTabela", listarTabela)

torneioTipoDoisRouter.put("/atualizarTabela", atualizarTabela)
torneioTipoDoisRouter.delete("/deletarTabela/:id", deletarTabela)
export default torneioTipoDoisRouter