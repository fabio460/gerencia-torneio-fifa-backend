import { Router } from "express"
import { atualizarOuCriar, criar, deletar, deletarTodasAsPosicoes, listar, listarPorId } from "../controllers/posicoesControllers"

const posicoesRouter = Router()

posicoesRouter.get('/', listar)
posicoesRouter.get('/:id', listarPorId)
posicoesRouter.post('/', criar)
posicoesRouter.put('/', atualizarOuCriar)
posicoesRouter.delete('/:id', deletarTodasAsPosicoes)
export default posicoesRouter