import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import datos from './routes/contacts.routes'
const app = express()


//Middelwares
app.use(cors())
app.use(express.json())//Ver los datos en consola como JSON
app.use(morgan('dev'))//Ver las peticiones en consola
app.use(helmet())

//Rutas
app.use('/',datos)

export default app