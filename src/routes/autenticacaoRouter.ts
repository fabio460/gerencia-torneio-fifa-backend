import { Router } from "express";
import { Request, Response } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/estatisticasController";
import { autorizacao, autorizacaoRetificada, logar } from "../controllers/autenticacaoController";
const autenticacaoRouter = Router()

autenticacaoRouter.post('/logar', logar)
autenticacaoRouter.get('/verificarLogado',autorizacao)
autenticacaoRouter.get('/verificarLogadoReticiado',autorizacaoRetificada)

export default autenticacaoRouter