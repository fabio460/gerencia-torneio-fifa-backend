import { Router } from "express";
import { trocaDeTorneio } from "../controllers/trocaTorneioController";

const trocaTorneioRouter = Router()
trocaTorneioRouter.put("/trocar", trocaDeTorneio)
export default trocaTorneioRouter