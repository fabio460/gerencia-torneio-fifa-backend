import { Router } from "express";
import { alterar, listar } from "../controllers/premiacoesController";
import { criar } from "../controllers/premiacoesController";

const premiacoesRouter = Router()
premiacoesRouter.get("/listar",listar)
premiacoesRouter.post("/criar",criar)
premiacoesRouter.put("/alterar",alterar)
export default premiacoesRouter