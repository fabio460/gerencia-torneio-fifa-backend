import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { jogadoresType } from "../types"

const prisma =new PrismaClient()

export const listar = async(req:Request, res: Response)=>{
    const p =await prisma.participantes.findMany({
       include:{
        jogadores:true,
        torneio:{
            select:{
                idUsuario:true,
                nome:true,
                usuario:{
                    select:{
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
    const p =await prisma.participantes.findUnique({
        include:{
            jogadores:true
        },
        where:{
            id
        }
    })
    res.json(p)
 }
export const criar = async(req:Request, res: Response)=>{
    try {
        const {nome, idTorneio, listaDeJogadores} = req.body
        let lista:jogadoresType[] = listaDeJogadores
       const p = await prisma.participantes.create({
          data:{
            nome,
            torneio:{
                connect:{
                  id:idTorneio
                }
            },
            saldo:100000
          },
          select:{
            id:true
          }
        })
        if (listaDeJogadores) {         
            lista.map(async jog=>{
               await prisma.jogadores.create({
                data:{
                    escudoDoTime:jog.escudoDoTime,
                    imagemDaNacionalidade:jog.imagemDaNacionalidade,
                    imagemDoJogador:jog.imagemDoJogador,
                    liga:jog.liga,
                    linkSoFifa:jog.linkSoFifa,
                    nacionalidade:jog.nacionalidade || "",
                    nome:jog.nome,
                    overall:jog.overall,
                    posicao:jog.posicao,
                    time:jog.time,
                    valorDoJogador:jog.valorDoJogador || "0",
                    idParticipante:p.id
                }
               })
            })
        }
        res.json("participante criado com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao criar participante", motivo:error})
    }
}
export const atualizar = async(req:Request, res: Response)=>{
    const id = req.params.id
    const {nome, saldo, time} = req.body
    console.log({nome, saldo, time, id})
    try {
        await prisma.participantes.update({
            where:{
                id
            },
             data:{
                nome,
                saldo,
                time,  
             }
        })
        res.json("participante atualizado com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao atualizar participante", motivo:error})
    }
}
 export const deletar = async(req:Request, res: Response)=>{
    const id = req.params.id
    try {
        await prisma.participantes.delete({
            where:{
                id
            }
        })
        res.json("participante removido com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao remover participante", motivo:error})
    }
}

