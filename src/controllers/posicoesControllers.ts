import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
const prisma =new PrismaClient()
export const listar =async (req:Request, res: Response)=>{
    try {
       const p =await prisma.posicaoNoCampinho.findMany({
        include:{
            jogador:true
        }
       })
       res.json(p)
    
   } catch (error) {
    res.json(error)
   }
}
export const listarPorId = async(req:Request, res: Response)=>{
    const id = req.params.id
    try {
        const p =await prisma.posicaoNoCampinho.findUnique({
           where:{
             id
           },
           
        })
        res.json(p)
        
    } catch (error) {
        res.status(401).json({erro:"falha ao buscar posicaoNoCampinho", motivo: error})
    }
 }
export const criar =async (req:Request, res: Response)=>{
    const {idDoJogador, x, y} = req.body
    
    try {
       await prisma.posicaoNoCampinho.create({
           data:{
           idDoJogador,
           x,
           y
           },
        })
        res.status(200).json("usuário criado com sucesso!")
    } catch (error) {
        res.status(402).json({erro:"falha ao criar posicaoNoCampinho", motivo: error})
    }
}


export const atualizarOuCriar = async(req:Request, res: Response)=>{
    const {idDoJogador, x, y} = req.body
    try {
        const p =await prisma.jogadores.findUnique({
            where:{
              id:idDoJogador
            },
            include:{
                posicaoNoCampinho:true
            }
         })
         if (p?.posicaoNoCampinho.length === 0) {
             await prisma.posicaoNoCampinho.create({
                 data:{
                     idDoJogador,
                     x,
                     y
                 },
             })
        }else{
            await prisma.posicaoNoCampinho.update({
                data:{
                    idDoJogador,
                    x,
                    y
                },
                where:{
                    id:p?.posicaoNoCampinho[0]?.id
                }
            })
            
         }
         res.json("posicão atualizada com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao atualizar posicaoNoCampinho", motivo: error})
    }
}
 export const deletar = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id
        const p =await prisma.posicaoNoCampinho.delete({
           where:{
             id
           }
        })
        res.json("Usuário deletado com sucesso!")
    } catch (error) {
        res.status(401).json({erro:"falha ao deletar posicaoNoCampinho", motivo: error})
    }
}
