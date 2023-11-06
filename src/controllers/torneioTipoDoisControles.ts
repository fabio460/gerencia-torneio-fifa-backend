import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { participantesType, rodadasType } from "../types"
const prisma =new PrismaClient()

export const listarCampeonato = async(req:Request, res: Response)=>{
  const idTorneio = req.params.id
  try {
      const resposta = await prisma.campeonato.findFirst({
        where:{
          idTorneio
        },
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
                  saldo:true,
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

export const getCampeonatoPorParticipante = async(req:Request, res: Response)=>{
   const {id} = req.body
   try {
     const campeonato = await prisma.campeonato.findFirst({
      where:{
        idTorneio:id
      }
     })
     res.json(campeonato)
    
   } catch (error) {
     res.json(null)
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
                saldo:true,
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
    const {times, voltas, idTorneio} = req.body
    const idDoCampeonato = await prisma.campeonato.create({
      data:{
        status:"aberto",
        data: new Date,
        idTorneio
      }
    })
    let rodadas = montarTorneio(times,voltas)
    criarRodadas(idDoCampeonato.id, rodadas)
    criarTabela(times, idTorneio, idDoCampeonato.id)
    res.json("torneio criado com sucesso!")
  } catch (error) {
    res.json({falha:"Falha ao criar campeonato!",motivo:error})   
  }
}
export const criarRodadas = (idCampeonato:string, rodadas:rodadasType[])=>{
  rodadas.map(async(rodada, key)=>{
    await prisma.rodada.create({
      data:{
        rodadaDeNumero:key + 1,
        golsMandante:0,
        golsVisitante:0,
        idCampeonato,
        statusDaRodada:"aberto",   
        mandante:{
          create:{
              idParticipante:rodada.casa.id,
              idTorneio:idCampeonato,
              nome:rodada.casa.nome,
              emblemaDoTime:rodada.casa.emblemaDoTime,
              saldo:rodada.casa.saldo,
              time:rodada.casa.time,
          }
        },
        visitante:{
          create:{
              idParticipante:rodada.visitante.id,
              idTorneio:idCampeonato,
              nome:rodada.visitante.nome,
              emblemaDoTime:rodada.visitante.emblemaDoTime,
              saldo:rodada.visitante.saldo,
              time:rodada.visitante.time
          }
        },
      }
    })
  })
}
export const criarTabela = async(times:participantesType[], idDoTorneio:string, idDoCampeonato:string)=>{
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
        idDoTorneio:idDoTorneio,
        idDoCampeonato
      }
    }) 
  })
}
export const deletarCampeonato = async(req:Request, res: Response)=>{
  const id = req.params.id
  try {
    await prisma.campeonato.delete({
        where:{
          id
        }
    })
    await prisma.tabelaDoCampeonato.deleteMany({
      where:{
        idDoCampeonato:id
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
  const {id,golsMandante, golsVisitante, casa,visitante} = req.body
  console.log(id,golsMandante, golsVisitante, casa,visitante)
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

export const atualizarTabela = async(req:Request, res: Response)=>{
  const {resultado, id,golsMandante, golsVisitante, rodada} = req.body

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
    res.json("tabela atualizada com sucesso") 
   } catch (error) {
    res.json(error)
   }
}
export const atualizarStatusDaRodada = async(req:Request, res: Response)=>{
  const {id, statusDaRodada, correcao} = req.body
  
  await prisma.rodada.update({
    where:{id},
    data:{statusDaRodada, golsMandante:0, golsVisitante:0}
  })
  correcao.map(async(dado:any)=>{
    await prisma.tabelaDoCampeonato.updateMany({
      where:{
       idDoParticipante:dado.idDoParticipante
      },
      data:{
       derrota:{decrement:dado.derrota},
       empates:{decrement:dado.empates},
       golsContra:{decrement:dado.golsContra},
       saldoDeGol:{decrement:dado.saldoDeGol},
       golsPro:{decrement:dado.golsPro},
       jogos:{decrement:dado.jogos},
       pontos:{decrement:dado.pontos},
       vitorias:{decrement:dado.vitorias}
      }
    })
  })

}



export const listarTabela = async(req:Request, res: Response)=>{
  const idTorneio = req.params.id
  try {
     const t = await prisma.tabelaDoCampeonato.findMany({
      where:{
        idDoTorneio:idTorneio
      },
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
      ],
      
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