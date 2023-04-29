import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { jogadoresType } from "../types"
const prisma = new PrismaClient()

export const listar = async(req:Request, res: Response)=>{
    const p = await prisma.jogadores.findMany({
        include:{
            participantes:{
                include:{
                    torneio:{
                        select:{
                            usuario:{
                                select:{
                                    nome:true
                                }
                            },
                            nome:true
                        }
                    }
                }
            }
        }
    })
    res.json(p)
}
export const listarPorId = async(req:Request, res: Response)=>{
    const id = req.params.id
    const p = await prisma.jogadores.findUnique({
        include:{
            participantes:true
        },
        where:{
            id
        }
    })
    res.json(p)
}
export const criar = async(req:Request, res: Response)=>{
    try {
        const {idParticipante, jogador} = req.body
        const j:jogadoresType = jogador
        console.log({idParticipante, jogador})
        await prisma.jogadores.create({
           data:{
               escudoDoTime:j.escudoDoTime,
               imagemDaNacionalidade:j.imagemDaNacionalidade,
               imagemDoJogador:j.imagemDoJogador,
               liga:j.liga,
               linkSoFifa:j.linkSoFifa,
               nacionalidade:j.nacionalidade || "",
               nome:j.nome,
               overall:j.overall,
               posicao:j.posicao,
               time:j.time,
               valorDoJogador:j.valorDoJogador || "",
               idParticipante
           }
        }) 
       res.json("jogador adicionado com sucesso")
        
    } catch (error) {
        res.status(400).json({falha:"falha ao adicionar jogador",motivo:error})
    }
}
export const atualizar = async(req:Request, res: Response)=>{
    res.json()
}
 export const deletar = async(req:Request, res: Response)=>{
     try {
        const id = req.params.id
        await prisma.jogadores.delete({
            where:{
                id
            }
        })
        res.json("jogador deletado com sucesso!")
        
    } catch (error) {
        res.status(401).json({falha:"falha ao deletar jogador",error})
    }
}