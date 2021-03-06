let express = require('express')
let router = express.Router()
let alumnos = require('../controller/alumnos/alumnos-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/insertAlumno/', alumnos.insertAlumno);
router.post('/getAlumnos/', alumnos.getAlumnos);
router.post('/eliminarAlumno/', alumnos.eliminarAlumno);
router.post('/updateAlumnos/', alumnos.updateAlumnos);
router.post('/getAlumno/', alumnos.getAlumno);
router.post('/insertParentesco/', alumnos.insertParentesco);
router.post('/getAlumnoFromPadre/', alumnos.getAlumnoForPadre);

module.exports = router