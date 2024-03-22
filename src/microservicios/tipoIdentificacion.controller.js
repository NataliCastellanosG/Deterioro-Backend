import { TipoIdentificacion } from "../models/TipoIdentificacion.js"


export const obtenerTiposIdentificacion = (req, res) => {
  TipoIdentificacion.findAll().then(response => {
    res.json(response)
  }).catch(error => {
    return res.status(500).json({ message: error.message });
  })
}

export const crearTipoIdentificacion = (req, res) => {
  const { nombreTipoIdentificacion } = req.body
  TipoIdentificacion.create({
    nombreTipoIdentificacion
  }).then(response => {
    res.json(response)
  })
    .catch(error => {
      return res.status(500).json({ message: error.message })
    })
}