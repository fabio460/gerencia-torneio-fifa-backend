import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function transferenciaMonetaria(idDoProprietario:string, idDoComprador:string, idsDosJogadoresSelecionados:string[], valorDaNegociacao:number){
    if (valorDaNegociacao) {
        const saldoDoComprador = await prisma.participantes.findUnique({
            where:{
                id:idDoComprador
            },
            select:{
                saldo:true
            }
        })
        if (saldoDoComprador?.saldo && (saldoDoComprador.saldo as number) < valorDaNegociacao) {
            return false
        }
        await prisma.participantes.update({
            where:{
                id:idDoProprietario
            },
            data:{
                saldo:{
                    increment: valorDaNegociacao
                }
            }
        })
        await prisma.participantes.update({
            where:{
                id:idDoComprador
            },
            data:{
                saldo:{
                    decrement: valorDaNegociacao
                }
            }
        })
        return true
    }else{
        const saldoDoComprador = await prisma.participantes.findUnique({
            where:{
                id:idDoComprador
            },
            select:{
                saldo:true
            }
        }) 
        
        const arrayValores = await prisma.jogadores.findMany({
            where:{
                id:{
                    in:idsDosJogadoresSelecionados
                }
            },
            select:{
                valorDoJogador:true
            } 
        });
        const somaDosValoresDosJogadores = arrayValores.reduce((acc:any, v:any)=>{
           return acc + parseFloat(v.valorDoJogador)
        },0)
    
        if (somaDosValoresDosJogadores > (saldoDoComprador?.saldo || 0)) {
            return false
        }else{
            await prisma.participantes.update({
                where:{
                    id:idDoComprador
                },
                data:{
                    saldo:{
                        decrement:somaDosValoresDosJogadores
                    }
                }
            })
            await prisma.participantes.update({
                where:{
                    id:idDoProprietario
                },
                data:{
                    saldo:{
                        increment:somaDosValoresDosJogadores
                    }
                }
            })
            return true
        }
    }
}

export const tratarValorDoJogador = (valor:string | undefined)=>{
    let valorArray = valor?.split('.') || ''
    return valorArray[0]
}