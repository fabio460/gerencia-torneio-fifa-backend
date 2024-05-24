import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const prisma =new PrismaClient()

export const listar = async(req:Request, res: Response)=>{
    const p =await prisma.premiacoes.findMany({
      
    })
    res.json(p)
    try {
        
    } catch (error) {
        
    }
}
export const criar = async(req:Request, res: Response)=>{
    try {
        const {campeao} = req.body
        await prisma.premiacoes.create({
            data:{
                campeao
            }
        })
        res.json("criado com sucesso!")
    } catch (error) {
        res.status(500).json({"flha ao criar":error})
    }
}

export const alterar = async(req:Request, res: Response)=>{
    try {
        const {
                id,
                campeao,
                viceCampeao, 
                terceiroColocado,
                quartoColocado,
                quintoColocado,
                defezaMenosVazada,
                defezaSegundaMenosVazada,
                defezaTerceiraMenosVazada,
                defezaQuartaMenosVazada,
                defezaQuintaMenosVazada,
                artilheiro, 
                viceArtilheiro,
                terceiroArtilheiro,
                quartoAtilheiro,
                quintoAtilheiro,
                empates,
                gols,
                vitoria
              } = req.body
        await prisma.premiacoes.updateMany({
            data:{
                campeao,
                viceCampeao,
                terceiroColocado,
                quartoColocado,
                quintoColocado,
                artilheiro,
                viceArtilheiro,
                terceiroArtilheiro,
                quartoAtilheiro,
                quintoAtilheiro,
                defezaMenosVazada,
                defezaSegundaMenosVazada,
                defezaTerceiraMenosVazada,
                defezaQuartaMenosVazada,
                defezaQuintaMenosVazada,
                empates,
                gols,
                vitoria
            },
            where:{
                id
            }
        })
        res.send("alterado com sucesso!")
    } catch (error) {
        console.log(error)
        res.status(500).json({"flha ao alterar":error})
    }
}
