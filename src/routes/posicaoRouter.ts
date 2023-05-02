import { Router } from "express"
import { atualizarOuCriar, criar, deletar, listar, listarPorId } from "../controllers/posicoesControllers"

const posicoesRouter = Router()

posicoesRouter.get('/', listar)
posicoesRouter.get('/:id', listarPorId)
posicoesRouter.post('/', criar)
posicoesRouter.put('/', atualizarOuCriar)
posicoesRouter.delete('/:id', deletar)
export default posicoesRouter