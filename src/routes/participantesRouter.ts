import { Router } from "express";
import { Request, Response } from "express";
import { atualizar, criar, deletar, listar, listarPorId, mudancaDeTorneio2, transferenciasMonetarias } from "../controllers/participantesController";
import { pagarFolha, pagarPremiacao } from "../controllers/pagamentosController";
const participantesRouter = Router()

participantesRouter.get('/', listar)
participantesRouter.get('/:id', listarPorId)
participantesRouter.post('/', criar)
participantesRouter.put('/premiacoes', pagarPremiacao)
participantesRouter.put('/pagarFolha',pagarFolha)
participantesRouter.put('/:id', atualizar)
participantesRouter.post('/transferenciasMonetarias', transferenciasMonetarias)
participantesRouter.get("/mudancaDeTorneio2",mudancaDeTorneio2)
participantesRouter.delete('/:id', deletar)
export default participantesRouter