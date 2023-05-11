import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { jogadoresType } from "../types"

const prisma =new PrismaClient()

export const pagarPremiacao = async(req:Request, res: Response)=>{
    try {
        const {premiados} = req.body
        const arrayEndividados:{idParticipante:string,premio:number}[] = premiados
        var arrayBruto:any = []
        let saida:any = arrayEndividados.map(async elem=>{
            let soma = arrayEndividados.reduce((acc, item)=>{
                return elem.idParticipante === item.idParticipante ? acc + item.premio : acc
            },0)
            arrayBruto.push({elem:elem.idParticipante,soma})
        })
          
          const parsed_array = arrayBruto.map((val:any)=>{return JSON.stringify(val)})
          const filtered_array= parsed_array.filter((value:any, ind:any)=> parsed_array.indexOf(value) == ind).map((val:any)=>{return JSON.parse(val)})
          const resposta =await filtered_array.map(async(item:any, key:any)=>{
            await prisma.participantes.update({
                where:{
                    id:item.elem
                },
                data:{
                    saldo:{
                        increment:item.soma
                    }
                }
            })
            if (key === (filtered_array.length - 1)) {
                return true
            }
          })
          if (resposta) {      
              res.json("Premiação paga com sucesso!")
          }
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