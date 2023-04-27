import { Router } from "express"

export interface jogadoresType{
    nome: string,
    imagemDoJogador: string,
    nacionalidade?: string,
    imagemDaNacionalidade: string,
    escudoDoTime: string,
    posicao: string,
    overall: string,
    valorDoJogador: string,
    time: string,
    liga: string,
    linkSoFifa:string 
}
export interface routesType{
    endpoint:string,
    route: Router
}

