import { antiga } from "./listaAntiga";
import { jogadoresType } from "../src/types";
const fs = require('fs');
let csvToJson = require('convert-csv-to-json');


type listType = {
    ID:string,
    Name:string,
    Age:string,
    Photo:string,
    Nationality:string,
    Flag:string,
    Overall:string,
    Potential:string,
    Club:string,
    ClubLogo:string,
    Value:string,
    Wage:string,
    Special:string,
    PreferredFoot:string,
    InternationalReputation:string,
    WeakFoot:string,
    SkillMoves:string,
    WorkRate:string,
    BodyType:string,
    RealFace:string,
    Position:string,
    Joined:string,
    LoanedFrom:string,
    ContractValidUntil:string,
    Height:string,
    Weight:string,
    ReleaseClause:string,
    KitNumber:string,
    BestOverallRating:string

}

export const createList = ()=>{

    let json:listType[] = csvToJson.parseSubArray('*',',').getJsonFromCsv("./listTest.csv")
    let nova:jogadoresType[] = []

    json.map((e)=>{
      nova.push({
        id:e.ID,
        nome:e.Name,
        imagemDoJogador:e.Photo,
        nacionalidade:e.Nationality,
        imagemDaNacionalidade:e.Flag,
        escudoDoTime:e.ClubLogo,
        posicao:e.Position,
        overall:e.Overall,
        valorDoJogador:e.Wage,
        time:e.Club,
        liga:"liga",
        linkSoFifa:"link"
      })
    })

    let resList:any = []
    nova.map(n=>{
        antiga.map(a=>{
            if (n.nome === a.nome) {
                resList.push({
                    nome:n.nome,
                    imagemDoJogador:n.imagemDoJogador,
                    nacionalidade:a.nacionalidade,
                    imagemDaNacionalidade:a.imagemDaNacionalidade,
                    escudoDoTime:a.escudoDoTime,
                    posicao:a.posicao,
                    overall:n.overall,
                    valorDoJogador:n.valorDoJogador.replace("€","").replace("K",""),
                    time:n.time,
                    liga:a.liga,
                    linkSoFifa:a.linkSoFifa
                })
            }
        })
    })
  
    const str = JSON.stringify(resList)
    try {
      const data = fs.writeFileSync('./listaNova.txt', str)
        // arquivo escrito com sucesso
      } catch (err) {
        console.error(err)
      }
    return resList
}

export const createList2 = ()=>{
  let resList:any = []
  let listaBruta:any = csvToJson.parseSubArray('*',',').getJsonFromCsv("./listas/listaAtualizada.csv")
  let listaTeste = csvToJson.getJsonFromCsv("./listas/listaAtualizada.csv")
  listaTeste.map((e:any)=>{
    resList.push({
       nome:e.objeto.split('"')[9],
       imagemDoJogador:e.objeto.split('"')[13],
       nacionalidade:e.objeto.split('"')[69],
       imagemDaNacionalidade:e.objeto.split('"')[71],
       escudoDoTime:e.objeto.split('"')[55],
       posicao:e.objeto.split('"')[19],
       overall:e.objeto.split('"')[23],
       time:e.objeto.split('"')[53],
       liga:"",
      linkSoFifa:'https://sofifa.com/player/'+e.objeto.split('"')[47],
      valorDoJogador:e.objeto.split("€")[2].split('"')[0].replace("K","000.0")
    })
  })
  const str = JSON.stringify(resList)
  try {
    const data = fs.writeFileSync('./listaNova.txt', str)
      // arquivo escrito com sucesso
    } catch (err) {
      console.error(err)
    }
  return resList 
}
