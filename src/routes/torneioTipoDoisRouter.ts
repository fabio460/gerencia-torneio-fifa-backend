import { Router } from "express";
import { Request, Response } from "express";
import { atualizarRodada, atualizarStatusDaRodada, atualizarTabela, criarTabela, deletarCampeonato, deletarTabela, gerarTorneio, listarCampeonato, listarRodadas, listarTabela } from "../controllers/torneioTipoDoisControles";
const torneioTipoDoisRouter = Router()

torneioTipoDoisRouter.get('/rodadas', listarRodadas)
torneioTipoDoisRouter.get('/listarCampeonato/:id', listarCampeonato)
torneioTipoDoisRouter.post('/gerarTorneio', gerarTorneio)
torneioTipoDoisRouter.put('/atualizarRodada', atualizarRodada)
torneioTipoDoisRouter.delete('/deletarCampeonato/:id', deletarCampeonato)
torneioTipoDoisRouter.get("/listarTabela/:id", listarTabela)
torneioTipoDoisRouter.put("/alterarStatusDaRodada", atualizarStatusDaRodada)
torneioTipoDoisRouter.put("/atualizarTabela", atualizarTabela)
torneioTipoDoisRouter.delete("/deletarTabela/:id", deletarTabela)
export default torneioTipoDoisRouter