import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import { db } from './config/db.js'
import servicesRoutes from './routes/servicesRoutes.js'

// Variables de Entorno
dotenv.config()

//Conguracion de la app
const app = express()

//Leer datos via body
app.use(express.json())

//Conectar a la base de datos
db() 

//Configuracion del CORS
const whitelist = [process.env.FRONTEND_URL]

if(process.argv[2] === '--postman'){
    whitelist.push(undefined)
}

const corsOption = {
    origin: function(origin, callback){
        if(whitelist.includes(origin)){
            //Permitir Conexion
            callback(null, true)
        }else{
            //No Permitir Conexion 
            callback(new Error('Error de CORS'))
        }
    }
}
app.use(cors(corsOption))

//Definicion de ruta
app.use('/api/services', servicesRoutes)

//Definicion de puerto
const PORT = process.env.PROT || 4001

//ejecutar la app
app.listen(PORT, () => {
    console.log(colors.blue('El Sevidor se esta ejecutando en el puerto:', PORT))
})

