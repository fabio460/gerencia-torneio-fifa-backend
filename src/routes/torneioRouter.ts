import { Router } from "express";
import { Request, Response } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/torneioController";
const torneioRouter = Router()

torneioRouter.get('/', listar)
torneioRouter.get('/:id', listarPorId)
torneioRouter.post('/', criar)
torneioRouter.put('/:id', atualizar)
torneioRouter.delete('/:id', deletar)
export default torneioRouter