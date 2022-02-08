import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

import path from 'path'

import datos from './routes/contacts.routes'
const app = express()


//Middelwares
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.json())//Ver los datos en consola como JSON
app.use(morgan('dev'))//Ver las peticiones en consola
app.use(helmet())

//Ruta inicial
app.get('/', (req, res) => {
    res.json("Hola mundo esta es la ruta inicial")
})

//Rutas
app.use('/api/contacts', datos)

app.use(express.static(path.join(__dirname, 'public')))

export default app