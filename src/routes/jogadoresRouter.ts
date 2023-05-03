import { Router } from "express";
import { Request, Response } from "express";
import { atualizar, criar, deletar, listar, listarPorId, transferenciaDeJogador } from "../controllers/jogadoresController";

const jogadoresRouter = Router()

jogadoresRouter.get('/', listar)
jogadoresRouter.get('/:id', listarPorId)
jogadoresRouter.post('/', criar)
jogadoresRouter.put('/:id', atualizar)
jogadoresRouter.put('/transferencia', transferenciaDeJogador)
jogadoresRouter.delete('/', deletar)

export default jogadoresRouter