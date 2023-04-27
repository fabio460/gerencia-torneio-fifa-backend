import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { jogadoresType } from "../types"

const prisma =new PrismaClient()

export const pagarPremiacao = async(req:Request, res: Response)=>{
    const {premiados} = req.body
    const arrayEndividados:{idParticipante:string,debito:number}[] = premiados
    try {
        arrayEndividados.map(async elem=>{
            const p = await prisma.participantes.findUnique({
                where:{
                    id:elem?.idParticipante
                }
            })
            await prisma.participantes.update({
                where:{
                    id: elem?.idParticipante
                },
                data:{
                    saldo:elem.debito + (p?.saldo || 0)
                }
            })
        })
        res.json("premiação efetuada com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao efetuar premiação", motivo:error})
    }
}

export const pagarFolha = async(req:Request, res: Response)=>{
    const {pagadores, nome, time, id} = req.body
    const arrayEndividados:{idParticipante:string}[] = pagadores
    var pagamentos:any = []
    try {
        arrayEndividados.map(async (elem, key)=>{
           const j = await prisma.participantes.findUnique({
            where:{
                id:elem.idParticipante
            },
            include:{
                jogadores:{
                    select:{
                        valorDoJogador:true
                    }
                }
            }
           })

           await prisma.participantes.update({
            where:{
                id:j?.id
            },
            data:{
                saldo:(j?.saldo || 0) - (j?.jogadores.reduce((acc, e)=>{
                    return acc +( parseFloat(e.valorDoJogador)*0.03)
                },0) || 0 )
            }
           })
        })
            
        res.json("premiação efetuada com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao efetuar premiação", motivo:error})
    }
}