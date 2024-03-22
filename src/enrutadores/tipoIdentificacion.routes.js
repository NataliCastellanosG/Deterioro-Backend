import { Router } from 'express'
import { crearTipoIdentificacion, obtenerTiposIdentificacion } from '../microservicios/tipoIdentificacion.controller.js'

const router = Router()

router.get('/tipoIdentificacion', obtenerTiposIdentificacion)
router.post('/tipoIdentificacion', crearTipoIdentificacion)

export default router