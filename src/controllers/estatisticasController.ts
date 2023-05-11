import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
const prisma = new PrismaClient()

export const listar = async(req:Request, res: Response)=>{
   const e = await prisma.estatistica.findMany() 
   res.json(e)
}
export const listarPorId = async(req:Request, res: Response)=>{
    const id = req.params.id
    const e =await prisma.estatistica.findUnique({
        where:{
            id
        }
    })
    res.json(e)
}
export const criar = async(req:Request, res: Response)=>{
    const {artilheiro, melhorAssistente, vencedor, data} = req.body
    try {
       await prisma.estatistica.create({
           data:{
            artilheiro,
            melhorAssistente,
            vencedor,
           }
        })
        res.json("Estatistica criada com sucesso")
        
    } catch (error) {
        res.status(401).json({falha:"Falha ao criar estatistica", motivo:error})
    }
}
export const atualizar = async(req:Request, res: Response)=>{
    const id = req.params.id
    const {artilheiro, melhorAssistente, vencedor, data} = req.body
    try {
       await prisma.estatistica.update({
            data:{
             artilheiro,
             melhorAssistente,
             vencedor,
             data
            },
            where:{
                id
            }
         })
         res.json("Estatistica criada com sucesso")
    } catch (error) {
        res.status(401).json({falha:"Falha ao atualizar estatistica", motivo:error})
    }
}
 export const deletar = async(req:Request, res: Response)=>{
    const id = req.params.id
    try {
        const ids = await prisma.estatistica.findMany({
            orderBy:{
                data:'desc'
            },
            select:{
                id:true
            },  
        })
        ids.map(async (item:any)=>{
            await prisma.estatistica.delete({
                where:{
                    id:item.id
                }
            })
        })
        res.json("histórico deletado com sucesso!")
    } catch (error) {
        res.status(401).json({falha:"Falha ao deletar estatistica", motivo:error})
    }
}
