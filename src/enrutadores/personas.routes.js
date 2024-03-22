import { Router } from 'express'
import { actualizarPersona, borrarPersona, crearPersona, obtenerPersonas } from '../microservicios/personas.controller.js'

const router = Router()

router.get('/personas', obtenerPersonas)
router.post('/personas', crearPersona)
router.put('/personas/:idUsuario', actualizarPersona)
router.delete('/personas/:idUsuario', borrarPersona)

export default router