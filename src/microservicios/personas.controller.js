import { Persona } from '../models/Persona.js'
import { TipoIdentificacion } from '../models/TipoIdentificacion.js';

export const obtenerPersonas = (req, res) => {
  Persona.findAll({
    include: [
      {
        model: TipoIdentificacion,
        attributes: ['nombreTipoIdentificacion']
      }
    ]
  }).then(response => {
    res.json(response)
  }).catch(error => {
    return res.status(500).json({ message: error.message });
  })
}

export const crearPersona = (req, res) => {
  const { nombreUsuario, numeroIdentificacion, fechaNacimientoUsuario, idTipoIdentificacion } = req.body
  Persona.create({
    nombreUsuario,
    numeroIdentificacion,
    fechaNacimientoUsuario,
    idTipoIdentificacion
  }).then(response => {
    res.json(response)
  })
    .catch(error => {
      return res.status(500).json({ message: error.message })
    })
}


export const actualizarPersona = (req, res) => {
  const { idUsuario } = req.params
  const { nombreUsuario } = req.body
  Persona.findByPk(idUsuario).then((response) => {
    const datos = response
    datos.nombreUsuario = nombreUsuario
    datos.save()
    res.json(datos)
  }).catch(error => {
    return res.status(500).json({ message: error.message })
  })

}

export const borrarPersona = (req, res) => {
  const { idUsuario } = req.params
  Persona.destroy({
    where: {
      idUsuario
    }
  }).then(() => {
    res.sendStatus(204)
  })
    .catch(error => {
      return res.status(500).json({ message: error.message })
    })
}

export const obtenerPersonaPorId = (req, res) => {
  const { idUsuario } = req.params
  Persona.findOne({
    where: {
      idUsuario,
    }
  }).then(response => {
    res.json(response)
  })
    .catch(error => {
      return res.status(500).json({ message: error.message })
    })
}