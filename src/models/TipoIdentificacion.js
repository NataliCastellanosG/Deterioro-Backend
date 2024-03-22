import { DataTypes } from "sequelize";
import { conexion } from "../database/conexion.js";

export const TipoIdentificacion = conexion.define("tiposIdentificacion", {
  idTipoIdentificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombreTipoIdentificacion: {
    type: DataTypes.STRING
  }
})