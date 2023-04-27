import { Router } from "express";
import { Request, Response } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/estatisticasController";
import { autorizacao, logar } from "../controllers/autenticacaoController";
const autenticacaoRouter = Router()

autenticacaoRouter.post('/logar', logar)
autenticacaoRouter.get('/verificarLogado',autorizacao)
export default autenticacaoRouter