import app from '../../app.js';
import { conexion } from './conexion.js';

// import '../models/Persona.js'
// import '../models/TipoIdentificacion.js'

export async function sincronizar() {

  conexion.sync({ force: false })
  conexion.authenticate()
    .then(() => {
      console.log('Conectado')
      app.listen(4000)
      console.log("Sincronizó, conectado por el puerto", 4000)
    })
    .catch(err => {
      console.log('No se conectó', err)
    })

  // se deben crear los esquemas para cada conjunto de tablas y las respectivas llaves foráneas
}
