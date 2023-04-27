import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
const prisma =new PrismaClient()
export const listar =async (req:Request, res: Response)=>{
   const p =await prisma.usuario.findMany({
    include:{
        torneio:true
    }
   })
   res.json(p)
}
export const listarPorId = async(req:Request, res: Response)=>{
    const id = req.params.id
    try {
        const p =await prisma.usuario.findUnique({
           where:{
             id
           },
           select:{
            id:true,
            nome:true,
            email:true,
            torneio:{
             include:{
                participantes:{
                   select:{
                      id:true,
                      nome:true,
                      saldo:true,
                      time:true,
                      jogadores:true
                   }
                }
             }
            }
         }
        })
        res.json(p)
        
    } catch (error) {
        res.status(401).json({erro:"falha ao buscar usuario", motivo: error})
    }
 }
export const criar =async (req:Request, res: Response)=>{
    const {nome, email, senha} = req.body
    try {
       await prisma.usuario.create({
           data:{
            nome,
            email,
            senha
           },
        })
        res.json("usuário criado com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao criar usuario", motivo: error})
    }
}
export const atualizar = async(req:Request, res: Response)=>{
    const {nome, email, senha} = req.body
    const id = req.params.id
    try {
        const p =await prisma.usuario.update({
           data:{
            nome,
            email,
            senha
           },
           where:{
            id
           }
        })
        res.json("usuario atualizado com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao atualizar usuario", motivo: error})
    }
}
 export const deletar = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id
        const p =await prisma.usuario.delete({
           where:{
             id
           }
        })
        res.json("Usuário deletado com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao deletar usuario", motivo: error})
    }
}
