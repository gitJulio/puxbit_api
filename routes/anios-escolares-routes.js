let express = require('express')
let router = express.Router()
let anio_escolares = require('../controller/anios-escolares/anios-escolares-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/getAniosEscolares/', anio_escolares.getAniosEscolares);
router.post('/updateAnioEscolar/', anio_escolares.updateAnioEscolar);
// router.post('/eliminarAlumno/', alumnos.eliminarAlumno);
// router.post('/updateAlumnos/', alumnos.updateAlumnos);
// router.post('/getAlumno/', alumnos.getAlumno);
// router.post('/insertParentesco/', alumnos.insertParentesco);
// router.post('/getAlumnoFromPadre/', alumnos.getAlumnoForPadre);

module.exports = router