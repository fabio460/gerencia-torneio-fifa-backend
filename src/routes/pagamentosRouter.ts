import { Router } from "express";
import { pagarFolha, pagarPremiacao } from "../controllers/pagamentosController";

const pagamentoRouter = Router()
pagamentoRouter.put('/pagarPremiacao', pagarPremiacao)
pagamentoRouter.put('/pagarFolha', pagarFolha)
export default pagamentoRouter