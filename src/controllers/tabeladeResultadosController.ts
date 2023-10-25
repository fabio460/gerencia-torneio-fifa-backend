import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { resultadoType } from "../types"
const prisma = new PrismaClient()

export const criar = async(req:Request, res: Response)=>{
   const {tabelaDePremiados} = req.body 
   const tabela:resultadoType[] = tabelaDePremiados
   try {
       tabela.map(async(dados)=>{
             await prisma.tabelaDeResultados.create({
            data:{
                idDoCampeonato:dados.beneficiado.idDoCampeonato,
                usuario:dados.beneficiado.equipe,
                colocacao:dados.Campeoes,
                premioColocacao:dados.PremioColocacao,
                artilharia:dados.PosArtilharia,
                premioArtilharia:dados.Artilharia,
                vitorias:dados.quantVitorias,
                premioVitorias:dados.Vitorias,
                empates:dados.quantEmpates,
                premioEmpates:dados.Empates,
                gols:dados.quantGols,
                premioGols:dados.Gols,
                idDoParticipante:dados.beneficiado.idDoParticipante,
                total:dados.premio
            }
           })
       })
       res.json("Tabela criada com sucesso")
    
   } catch (error) {
    res.json({falha:"falha ao criar tabela", motivo:error})
   }
}

export const listar = async(req:Request, res: Response)=>{
   const response = await prisma.tabelaDeResultados.findMany()
   res.json(response);
}
export const listarPorIdDoCampionato = async(req:Request, res: Response)=>{
    const {idDoCampeonato} = req.body
    const response = await prisma.tabelaDeResultados.findMany({
        where:{
            idDoCampeonato
        }
    })
    res.json(response);
}

export const deletar = async(req:Request, res: Response)=>{
    const {id} = req.body
    const response = await prisma.tabelaDeResultados.delete({
        where:{
            id
        }
    })
    res.json(response);
 }