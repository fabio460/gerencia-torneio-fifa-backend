import express  from 'express'
const app = express()
import cors from 'cors'
import { routes } from './src/routes'
app.use(cors())
app.use(express.json())
routes.forEach(elem=>{
    return app.use(elem.endpoint, elem.route)
})

app.listen(4000, ()=>console.log('rodando na porta 4000'))