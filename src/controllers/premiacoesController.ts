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
                artilheiro, 
                defezaMenosVazada,
                defezaQuartaMenosVazada,
                defezaSegundaMenosVazada,
                defezaTerceiraMenosVazada,
                empates,
                gols,
                quartoAtilheiro,
                quartoColocado,
                terceiroArtilheiro,
                terceiroColocado,
                viceArtilheiro,
                vitoria
              } = req.body
        await prisma.premiacoes.updateMany({
            data:{
                campeao,
                viceCampeao,
                artilheiro,
                defezaMenosVazada,
                defezaQuartaMenosVazada,
                defezaSegundaMenosVazada,
                defezaTerceiraMenosVazada,
                empates,
                gols,
                quartoAtilheiro,
                quartoColocado,
                terceiroArtilheiro,
                terceiroColocado,
                viceArtilheiro,
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
