import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
const prisma =new PrismaClient()
export const trocaDeTorneio = async(req:Request, res: Response)=>{
    
    const {idTorneio, idDoParticipante} = req.body
    console.log(idTorneio+" - "+idDoParticipante)
    try {
        await prisma.participantes.update({
            where:{
                id:idDoParticipante
            },
             data:{
                idTorneio
             }
        })
        res.json("torneio alterado com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao alterar torneio", motivo:error})
    }
}