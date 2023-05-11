import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const prisma =new PrismaClient()

export const listar = async(req:Request, res: Response)=>{
    const p =await prisma.torneio.findMany({
        include:{
            participantes:{
                include:{
                    jogadores:true
                }
            },
        }
    })
    res.json(p)
}
export const listarPorId = async(req:Request, res: Response)=>{
    const id = req.params.id
    const p =await prisma.torneio.findUnique({
        where:{
           id
        },
        include:{
            participantes:true
        }
    })
    res.json(p)
 }
export const criar = async(req:Request, res: Response)=>{
    const {nome, idUsuario} = req.body
    try {
        const nomeDoUsuario =await prisma.usuario.findUnique({
            where:{
                id:idUsuario
            },
            select:{
                nome:true
            }
        })
        await prisma.torneio.create({
           data:{
            nome,
            idUsuario,
            participantes:{
                connectOrCreate:{
                   where:{
                    id:idUsuario
                   },
                   create:{
                    nome:nomeDoUsuario?.nome || "",
                    saldo:0,
                    time:"genérico"
                   }
                }
            }
           }
        })
        res.json("torneio criado com sucesso!")
       
    } catch (error) {
        res.status(401).json({erro:"falha ao criar torneio", motivo:error})
    }
}
export const atualizar = async(req:Request, res: Response)=>{
    const id = req.params.id
    const {nome, idUsuario} = req.body
    try {
        await prisma.torneio.update({
            where:{
                id
            },
            data:{
              nome
            }
        })
        res.json("torneio atualizado com sucesso!")
        
    } catch (error) {
        res.status(401).json({erro:"falha ao atualizar torneio", motivo:error})
    }
}
 export const deletar = async(req:Request, res: Response)=>{
    const id = req.params.id
    try {
        await prisma.torneio.delete({
            where:{
                id
            }
        })
        res.json("torneio deletado com sucesso!")
        
    } catch (error) {
        res.status(401).json({erro:"falha ao deletar torneio", motivo:error})
    }
}