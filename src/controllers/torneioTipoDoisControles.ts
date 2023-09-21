import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { participantesType } from "../types"
const prisma =new PrismaClient()

export const listarCampeonato = async(req:Request, res: Response)=>{
  try {
      const resposta = await prisma.campeonato.findMany({
        include:{
          rodada:{
            select:{
              id:true,
              rodadaDeNumero:true,
              golsMandante:true,
              golsVisitante:true,
              statusDaRodada:true,
              mandante:{
                select:{
                  id:true,
                  idParticipante:true,
                  nome:true,
                  emblemaDoTime:true,
                  time:true,
                  saldo:true
                }
              },
              visitante:{
                select:{
                  id:true,
                  idParticipante:true,
                  nome:true,
                  emblemaDoTime:true,
                  time:true,
                  saldo:true
                }
              }
            }
           
          }
        }
      })
      res.json(resposta)
    } catch (error) {
      res.status(400).json({falha:"Erro ao ler os dados", motivo:error})
    }
}

export const listarRodadas = async(req:Request, res: Response)=>{
  try {
    const resposta = await prisma.campeonato.findMany({
      include:{
        rodada:{
          select:{
            id:true,
            rodadaDeNumero:true,
            golsMandante:true,
            golsVisitante:true,
            statusDaRodada:true,
            mandante:{
              select:{
                id:true,
                nome:true,
                emblemaDoTime:true,
                time:true,
                saldo:true
              },
              where:{
                nome:"Jose"
              }
            },
            visitante:{
              select:{
                id:true,
                nome:true,
                emblemaDoTime:true,
                time:true,
                saldo:true
              },
              where:{
                nome:"Jose"
              }
            }
          }
         
        }
      }
    })
    res.json(resposta)
    
   } catch (error) {
    res.json(error)
   }
}

export const gerarTorneio = async(req:Request, res: Response)=>{
  try {    
    const {times, voltas, data} = req.body
    const idDoTorneio = await prisma.campeonato.create({
      data:{
        status:"aberto",
        data: new Date,
      }
    })
    let rodadas = montarTorneio(times,voltas)
    criarTabela(times, idDoTorneio.id)
    rodadas.map(async(rodada, key)=>{
      await prisma.rodada.create({
        data:{
          rodadaDeNumero:key + 1,
          golsMandante:0,
          golsVisitante:0,
          campeonato:{
            connect:{
              id:idDoTorneio.id
            }
          },
          statusDaRodada:"aberto",   
          mandante:{
            create:{
                idParticipante:rodada.casa.id,
                idTorneio:idDoTorneio.id,
                nome:rodada.casa.nome,
                emblemaDoTime:rodada.casa.emblemaDoTime,
                saldo:rodada.casa.saldo,
                time:rodada.casa.time,
            }
          },
          visitante:{
            create:{
                idParticipante:rodada.visitante.id,
                idTorneio:idDoTorneio.id,
                nome:rodada.visitante.nome,
                emblemaDoTime:rodada.visitante.emblemaDoTime,
                saldo:rodada.visitante.saldo,
                time:rodada.visitante.time
            }
          },
        }
      })
    })
    res.json("torneio criado com sucesso!")
  } catch (error) {
    res.json({falha:"Falha ao criar campeonato!",motivo:error})   
  }
}
export const criarTabela = async(times:participantesType[], idDoTorneio:string)=>{
  
  times.map(async(t)=>{
    await prisma.tabelaDoCampeonato.create({
      data:{
        idDoParticipante:t.id,
        equipe:t.nome,
        avatar:t.emblemaDoTime as string,
        vitorias:0,
        derrota:0,
        empates:0,
        golsContra:0,
        golsPro:0,
        jogos:0,
        pontos:0,
        saldoDeGol:0,
        idDoTorneio:idDoTorneio
      }
    }) 
  })
}
export const deletarCampeonato = async(req:Request, res: Response)=>{
  const id = req.params.id
  try {
 
  const resposta =  await prisma.campeonato.delete({
      where:{
        id
      }
    })
  await prisma.tabelaDoCampeonato.deleteMany({
    where:{
      idDoTorneio:id
    }
  })  

  await prisma.timesDaRodada.deleteMany({
    where:{
      idTorneio:id
    }
  })
  res.send("Campeonato deletado com sucesso!")  
  } catch (error) {
    res.json({falha:"Erro ao deletar campeonato", motivo:error})
  }
}

export const atualizarRodada = async(req:Request, res: Response)=>{
  const {id,golsMandante, golsVisitante} = req.body
 
  try {
    await prisma.rodada.update({
      where:{
        id
      },
      data:{
        golsMandante,
        golsVisitante,
        statusDaRodada:"fechado"
      }
    })
    res.json("Rodada atualizada com sucesso!")
    
  } catch (error) {
    res.json({falha:"Falha ao atualizar rodada", motivo:error})
  }
}




export const listarTabela = async(req:Request, res: Response)=>{
  try {
     const t = await prisma.tabelaDoCampeonato.findMany({
      orderBy:[
        {
          pontos:"desc"
        },
        {
          jogos:"asc"
        },
        {
          vitorias:"desc"
        },
        {
          empates:"asc"
        },
        {
          derrota:"asc"
        },
        {
          golsPro:"desc"
        },
        {
          golsContra:"asc"
        },
        {
          saldoDeGol:"desc"
        }
      ]
     })
     res.json(t)
   } catch (error) {
    res.json(error)
   }
}

export const deletarTabela = async(req:Request, res: Response)=>{
  const id = req.params.id
  try {
     const t = await prisma.tabelaDoCampeonato.delete({
      where:{
        id
      }
     })

     res.json(t)
   } catch (error) {
    res.json(error)
   }
}

export const atualizarTabela = async(req:Request, res: Response)=>{
  
  const {resultado } = req.body
  console.log(resultado)
  
  try {
    resultado.map(async(dado:any)=>{
      await prisma.tabelaDoCampeonato.updateMany({
        where:{
         idDoParticipante:dado.idDoParticipante
        },
        data:{
         derrota:{increment:dado.derrota},
         empates:{increment:dado.empates},
         golsContra:{increment:dado.golsContra},
         saldoDeGol:{increment:dado.saldoDeGol},
         golsPro:{increment:dado.golsPro},
         jogos:{increment:dado.jogos},
         pontos:{increment:dado.pontos},
         vitorias:{increment:dado.vitorias}
        }
      })
    })
    res.json("tabela atualizada com sucesso!") 
   } catch (error) {
    res.json(error)
   }
}

function montarTorneio(participantes:participantesType[], voltas:number ) {
  const tam = participantes.length
  let aux = []
  for (let i = 0; i < tam - 1; i++) {
    for (let j = 1; j < tam ; j++) {
      if (participantes[j+i]) {          
        aux.push({
          casa:participantes[i],
          visitante: participantes[i+j]
        })
      }
  
    }
  }
  if (voltas === 2) {
    for (let i = 0; i < tam - 1; i++) {
      for (let j = 1; j < tam ; j++) {
        if (participantes[j+i]) {          
          aux.push({
            casa:participantes[i],
            visitante: participantes[i+j]
          })
        }
    
      }
    }
  }
  return aux.sort(()=>(Math.round(Math.random())-0.5))
}