import express from 'express';
import personasRoutes from './src/enrutadores/personas.routes.js'
import tipoIdentificacionRoutes from './src/enrutadores/tipoIdentificacion.routes.js'

const app = express();

//Middleware para que express interprete objetos JSON
app.use(express.json())

app.use(personasRoutes)
app.use(tipoIdentificacionRoutes)

export default app