import Sequelize from "sequelize";

//  Estos datos debe ir en un archivo diferente, importarlos y ponerlos en el gitignore
var baseDatos = 'Deterioro';
var nombreUsuario = 'postgres';
var clave = 'admin';

//Se genera la conexión con la base de datos
export const conexion = new Sequelize(baseDatos, nombreUsuario, clave, {
  host: 'localhost',
  dialect: 'postgres'
})
