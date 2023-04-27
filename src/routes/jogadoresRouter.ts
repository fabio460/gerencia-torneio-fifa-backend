import { Router } from "express";
import { Request, Response } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/jogadoresController";

const jogadoresRouter = Router()

jogadoresRouter.get('/', listar)
jogadoresRouter.get('/:id', listarPorId)
jogadoresRouter.post('/', criar)
jogadoresRouter.put('/:id', atualizar)
jogadoresRouter.delete('/:id', deletar)

export default jogadoresRouter