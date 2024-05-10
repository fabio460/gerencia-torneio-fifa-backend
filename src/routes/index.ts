import { routesType } from "../types"
import autenticacaoRouter from "./autenticacaoRouter"
import estatisticaRouter from "./estatisticaRouter"
import jogadoresRouter from "./jogadoresRouter"
import pagamentoRouter from "./pagamentosRouter"
import participantesRouter from "./participantesRouter"
import posicoesRouter from "./posicaoRouter"
import premiacoesRouter from "./premiacoesRouter"
import principal from "./principal"
import tabelaDeResultadosRouter from "./tabelaResultadosRouter"
import torneioRouter from "./torneioRouter"
import torneioTipoDoisRouter from "./torneioTipoDoisRouter"
import usuarioRouter from "./usuarioRouter"
import trocaTorneioRouter from "./trocaTorneioRouter"

export const routes:routesType[] = [
   {endpoint:"/",route:principal},
   {endpoint:"/usuario",route:usuarioRouter},
   {endpoint:"/torneio",route:torneioRouter},
   {endpoint:"/participantes",route:participantesRouter},
   {endpoint:"/jogadores",route:jogadoresRouter},
   {endpoint:"/estatistica",route:estatisticaRouter},
   {endpoint:"/pagamentos", route:pagamentoRouter},
   {endpoint:"/autenticacao", route:autenticacaoRouter},
   {endpoint:"/posicoes", route:posicoesRouter},
   {endpoint:"/torneioTipoDois",route:torneioTipoDoisRouter},
   {endpoint:"/tabelaDeResultados", route:tabelaDeResultadosRouter},
   {endpoint:"/premiacoes", route:premiacoesRouter},
   {endpoint:"/trocaDeTorneio",route:trocaTorneioRouter}
]