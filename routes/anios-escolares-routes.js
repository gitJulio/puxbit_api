let express = require('express')
let router = express.Router()
let anio_escolares = require('../controller/anios-escolares/anios-escolares-controller')


router.post('/getAniosEscolares/', anio_escolares .getAniosEscolares);
// router.post('/getAlumnos/', alumnos.getAlumnos);
// router.post('/eliminarAlumno/', alumnos.eliminarAlumno);
// router.post('/updateAlumnos/', alumnos.updateAlumnos);
// router.post('/getAlumno/', alumnos.getAlumno);
// router.post('/insertParentesco/', alumnos.insertParentesco);
// router.post('/getAlumnoFromPadre/', alumnos.getAlumnoForPadre);

module.exports = router
