import { Router } from "express"

export interface jogadoresType{
    id:string,
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
    linkSoFifa:string,
    posicaoNoCampinho?:posicaoNoCampinhoType  
}
export interface routesType{
    endpoint:string,
    route: Router
}

export type posicaoNoCampinhoType = {
    idJogador:string,
    x:number,
    y:number
  }

export type jwtType ={
    id: string,
	iat?: number,
	exp?: number,
}