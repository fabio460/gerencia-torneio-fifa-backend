
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  email: 'email',
  nome: 'nome',
  senha: 'senha'
};

exports.Prisma.TorneioScalarFieldEnum = {
  id: 'id',
  idUsuario: 'idUsuario',
  nome: 'nome'
};

exports.Prisma.ParticipantesScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  saldo: 'saldo',
  time: 'time',
  emblemaDoTime: 'emblemaDoTime',
  idTorneio: 'idTorneio'
};

exports.Prisma.JogadoresScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  imagemDoJogador: 'imagemDoJogador',
  nacionalidade: 'nacionalidade',
  imagemDaNacionalidade: 'imagemDaNacionalidade',
  escudoDoTime: 'escudoDoTime',
  posicao: 'posicao',
  overall: 'overall',
  valorDoJogador: 'valorDoJogador',
  time: 'time',
  liga: 'liga',
  linkSoFifa: 'linkSoFifa',
  idParticipante: 'idParticipante'
};

exports.Prisma.EstatisticaScalarFieldEnum = {
  id: 'id',
  vencedor: 'vencedor',
  assistentes: 'assistentes',
  artilheiros: 'artilheiros',
  data: 'data',
  torneioId: 'torneioId'
};

exports.Prisma.PosicaoNoCampinhoScalarFieldEnum = {
  id: 'id',
  idDoJogador: 'idDoJogador',
  x: 'x',
  y: 'y'
};

exports.Prisma.CampeonatoScalarFieldEnum = {
  id: 'id',
  status: 'status',
  data: 'data',
  idTorneio: 'idTorneio'
};

exports.Prisma.RodadaScalarFieldEnum = {
  id: 'id',
  idDoMandante: 'idDoMandante',
  idDoVisitante: 'idDoVisitante',
  idCampeonato: 'idCampeonato',
  golsMandante: 'golsMandante',
  golsVisitante: 'golsVisitante',
  rodadaDeNumero: 'rodadaDeNumero',
  statusDaRodada: 'statusDaRodada'
};

exports.Prisma.TimesDaRodadaScalarFieldEnum = {
  id: 'id',
  idParticipante: 'idParticipante',
  nome: 'nome',
  saldo: 'saldo',
  time: 'time',
  emblemaDoTime: 'emblemaDoTime',
  idTorneio: 'idTorneio',
  idRodada: 'idRodada'
};

exports.Prisma.TabelaDoCampeonatoScalarFieldEnum = {
  id: 'id',
  idDoTorneio: 'idDoTorneio',
  idDoCampeonato: 'idDoCampeonato',
  idDoParticipante: 'idDoParticipante',
  avatar: 'avatar',
  equipe: 'equipe',
  pontos: 'pontos',
  jogos: 'jogos',
  vitorias: 'vitorias',
  empates: 'empates',
  derrota: 'derrota',
  golsPro: 'golsPro',
  golsContra: 'golsContra',
  saldoDeGol: 'saldoDeGol'
};

exports.Prisma.ResultadosScalarFieldEnum = {
  id: 'id',
  avatar: 'avatar',
  idDoParticipante: 'idDoParticipante',
  usuario: 'usuario',
  colocacao: 'colocacao',
  premioColocacao: 'premioColocacao',
  artilharia: 'artilharia',
  premioArtilharia: 'premioArtilharia',
  vitorias: 'vitorias',
  premioVitorias: 'premioVitorias',
  empates: 'empates',
  premioEmpates: 'premioEmpates',
  gols: 'gols',
  premioGols: 'premioGols',
  total: 'total',
  posicaoDefezaMenosVazada: 'posicaoDefezaMenosVazada',
  premioDefezaMenosVazada: 'premioDefezaMenosVazada',
  golsTomados: 'golsTomados',
  jogos: 'jogos',
  idTabelaResultados: 'idTabelaResultados'
};

exports.Prisma.TabelaDeResultadosScalarFieldEnum = {
  id: 'id',
  idDoCampeonato: 'idDoCampeonato',
  idDoTorneio: 'idDoTorneio',
  data: 'data',
  dataDeInicio: 'dataDeInicio'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Torneio: 'Torneio',
  Participantes: 'Participantes',
  Jogadores: 'Jogadores',
  Estatistica: 'Estatistica',
  PosicaoNoCampinho: 'PosicaoNoCampinho',
  campeonato: 'campeonato',
  Rodada: 'Rodada',
  TimesDaRodada: 'TimesDaRodada',
  tabelaDoCampeonato: 'tabelaDoCampeonato',
  Resultados: 'Resultados',
  TabelaDeResultados: 'TabelaDeResultados'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
