import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { jogadoresType } from "../types"
import { transferenciaMonetaria, tratarValorDoJogador } from "../metodosUteis"
const prisma = new PrismaClient()

export const listar = async(req:Request, res: Response)=>{
    const p = await prisma.jogadores.findMany({
        include:{
            participantes:{
                include:{
                    torneio:{
                        select:{
                            usuario:{
                                select:{
                                    nome:true
                                }
                            },
                            nome:true
                        }
                    }
                }
            },
            posicaoNoCampinho:true
        }
    })
    res.json(p)
}
export const listarPorId = async(req:Request, res: Response)=>{
    try {
        const id = req.params.id
        if (id) {            
            const p = await prisma.jogadores.findUnique({
                include:{
                    participantes:true,
                    posicaoNoCampinho:true
                },
                where:{
                    id
                }
            })
            res.json(p)
        }
        
    } catch (error) {
        res.status(400).json({falha:"falha ao adicionar jogador",motivo:error})
    }
}

export const listarPorTorneio = async(req:Request, res: Response)=>{
    try {
        const {idTorneio} = req.body
        const p = await prisma.jogadores.findMany({
           where:{
             participantes:{
                idTorneio
             }
           }
        })
        res.json(p)
        
    } catch (error) {
        res.status(400).json({falha:"falha ao adicionar jogador",motivo:error})
    }
}

export const criar = async(req:Request, res: Response)=>{
    try {
        const {idParticipante, jogador} = req.body
        const j:jogadoresType = jogador
        const preco:number = parseFloat(tratarValorDoJogador(j.valorDoJogador)) || 0
        const saldoObjeto = await prisma.participantes.findUnique({
            where:{
                id: idParticipante
            },
            select:{
                saldo:true
            }
        })
        const saldo = saldoObjeto?.saldo
        
        if (!saldo) {
            res.json("saldo nulo!")    
        }else{
            if (preco > saldo) {
                res.json("Saldo insuficiente!")
            }else{
                await prisma.jogadores.create({
                    data:{
                        escudoDoTime:j.escudoDoTime,
                        imagemDaNacionalidade:j.imagemDaNacionalidade,
                        imagemDoJogador:j.imagemDoJogador,
                        liga:j.liga,
                        linkSoFifa:j.linkSoFifa,
                        nacionalidade:j.nacionalidade || "",
                        nome:j.nome,
                        overall:j.overall,
                        posicao:j.posicao,
                        time:j.time,
                        valorDoJogador:j.valorDoJogador || "",
                        idParticipante
                    }
                }) 
                await prisma.participantes.update({
                    where:{
                        id:idParticipante
                    },
                    data:{
                        saldo:saldo - preco
                    }
                })
                res.json("jogador comprado com sucesso")
            }
        }        
    } catch (error) {
        res.status(400).json({falha:"falha ao adicionar jogador",motivo:error})
    }
}
export const transferenciaDeJogadores = async(req:Request, res: Response)=>{
    const {idDoProprietario, idDoComprador, idsDosJogadoresSelecionados, valorDaNegociacao} = req.body
    try {
        const resposta = await transferenciaMonetaria(idDoProprietario, idDoComprador, idsDosJogadoresSelecionados, valorDaNegociacao)
        if (resposta) {
            idsDosJogadoresSelecionados.map(async (ids:string)=>{
                await prisma.participantes.update({
                    where:{
                        id:idDoComprador,
                    },
                    data:{
                        jogadores:{
                            connect:{
                                id:ids
                            },
                            
                        }
                    }
                })
            })
            res.json("transferência concluida com sucesso!!!")
        }else{
            res.json("transferência não efetuado pois o comprador não possui saldo suficiente!")
        }
        
    } catch (error) {
        res.status(400).json({falha:"falha ao transferir jogador", motivo:error})
    }
}

export const transferenciasMonetarias = async(req:Request, res: Response)=>{
    const {idDoRecebidor, idDoPagador, valor} = req.body
    try {
        const saldoDoComprador = await prisma.participantes.findUnique({
            where:{
                id:idDoPagador
            },
            select:{
                saldo:true
            }
        })
        res.json("transferência comcluida com sucesso")
        
    } catch (error) {
        res.status(400).json({falha:"falha ao transferir jogador", motivo:error})
    }
}
export const deletar = async(req:Request, res: Response)=>{
     try {
        const id = req.params.id
        const {listaDeIds, saldoAtualizado, idParticipante} = req.body
        listaDeIds.map(async(e:string)=>{        
            await prisma.jogadores.delete({
                where:{
                    id:e
                }
            })
        })
        await prisma.participantes.update({
            where:{
                id:idParticipante
            },
            data:{
                saldo:saldoAtualizado
            }
        })
         res.json("jogador deletado com sucesso!")
        
    } catch (error) {
        res.status(401).json({falha:"falha ao deletar jogador",error})
    }
}