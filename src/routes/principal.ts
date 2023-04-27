import { Router } from "express";
import { Request, Response } from "express";
const principal = Router()

principal.get('/',(req:Request, res: Response)=>{
    console.log("get")
   res.send("<h1>back rodando ...</h1>")
})

export default principal