import { Router } from "express";
import { Request, Response } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../controllers/usuariosController";
const usuarioRouter = Router()

usuarioRouter.get('/', listar)
usuarioRouter.get('/:id', listarPorId)
usuarioRouter.post('/', criar)
usuarioRouter.put('/:id', atualizar)
usuarioRouter.delete('/:id', deletar)
export default usuarioRouter