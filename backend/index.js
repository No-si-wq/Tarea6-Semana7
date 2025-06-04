import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { db } from './config/db.js';
import servicesRoutes from './routes/servicesRoutes.js';

//Variables de entorno
dotenv.config()

//Configuracion de la app
const app = express()

//Leer datos via body
app.use(express.json())

//Conectar a la base de datos
db();

//Definicion de la ruta
app.use('/api/services', servicesRoutes);

//Definicion del puerto
const PORT = process.env.PORT || 4000

//Ejecucion la app
app.listen(PORT, () => {
  console.log(colors.blue('El servidor se esta ejecutando en el puerto: ', PORT));
})

