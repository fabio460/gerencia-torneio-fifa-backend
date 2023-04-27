import { Router } from "express";
import { Request, Response } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/estatisticasController";
const estatisticaRouter = Router()

estatisticaRouter.get('/', listar)
estatisticaRouter.get('/:id', listarPorId)
estatisticaRouter.post('/', criar)
estatisticaRouter.put('/:id', atualizar)
estatisticaRouter.delete('/:id', deletar)
export default estatisticaRouter