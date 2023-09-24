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
export type participantesType = {
    id: string,
    jogadores:jogadoresType[],
    nome: string,
    saldo: number,
    time: string,
    idTorneio: string,
    torneio: torneioType,
    emblemaDoTime?: string
}

export interface torneioType {
    id: string,
    idDoUsuario:string,
    nome:string,
    participantes:participantesType[]
 }
export type golsType = {participante:participantesType, gol:number}
export type resultadoDaPartidaType= {
  golCasa:golsType,
  golFora:golsType
}

export type rodadasType = {
        casa: participantesType;
        visitante: participantesType;
}