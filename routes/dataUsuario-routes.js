let express = require('express')
let router = express.Router()
let dataUsuario = require('../controller/dataUsuario/dataUsuario-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/getDataUsuario', dataUsuario.getDataUsuario)
router.post('/getGradosProfesor', dataUsuario.getGradosProfesor)
router.post('/getSeccionesGradoProfesor', dataUsuario.getSeccionesGradoProfesor)
router.post('/getClasesSeccionesGrados', dataUsuario.getClasesSeccionesGrados)
router.post('/getAlumnosClase', dataUsuario.getAlumnosClase)



module.exports = router