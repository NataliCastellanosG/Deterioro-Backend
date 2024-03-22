import { DataTypes } from "sequelize";
import { conexion } from "../database/conexion.js";
import { TipoIdentificacion } from "./TipoIdentificacion.js";

export const Persona = conexion.define('personas', {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombreUsuario: {
    type: DataTypes.STRING
  },
  numeroIdentificacion: {
    type: DataTypes.STRING
  },
  fechaNacimientoUsuario: {
    type: DataTypes.DATE
  },
})

Persona.belongsTo(TipoIdentificacion, {
  foreignKey: "idTipoIdentificacion",
  targetId: "idTipoIdentificacion"
})

TipoIdentificacion.hasMany(Persona, {
  foreignKey: "idTipoIdentificacion",
  targetId: "idTipoIdentificacion"
})