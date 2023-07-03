import { PrismaClient } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()
import dotenv from 'dotenv'
dotenv.config()
const secret:any = process.env.secretKey

export const  autorizacao = async(req:Request, res:Response, next: NextFunction)=>{
    try {
       const header:any = req.headers['x-access-token']
   
       if (jwt.verify(header,secret)) {
        res.json("autorizado")
       }else{
        res.status(401).json("usuário não autenticado")
       }
   } catch (error) {
      res.status(400).json("não autorizado")
   }
}

export const  logar = async(req:Request, res:Response)=>{
   try {      
      const {email, senha} = req.body
      const auth =await prisma.usuario.findFirst({
       where:{
         email:email,
         senha
       },
       select:{
          id:true,
          nome:true,
          email:true,
          torneio:{
           include:{
              participantes:{
                 select:{
                    id:true,
                    nome:true,
                    saldo:true,
                    time:true,
                    jogadores:true
                 }
              }
           }
          }
       }
      })
      const token = jwt.sign({id:auth?.id},secret,{expiresIn:"30s"})
      if (auth) {
          res.json({auth, token})
      }else{
       res.status(401).json("usuário ou senha inválidos")
      }
   } catch (error) {
      res.status(401).json({erro:"falha ao fazer login",motivo:error})  
   }
 }
