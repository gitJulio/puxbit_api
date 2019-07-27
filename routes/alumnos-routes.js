let express = require('express')
let router = express.Router()
let alumnos = require('../controller/alumnos/alumnos-controller')


router.post('/insertAlumno/', alumnos.insertAlumno);
router.post('/getAlumnos/', alumnos.getAlumnos);
router.post('/eliminarAlumno/', alumnos.eliminarAlumno);
router.post('/updateAlumnos/', alumnos.updateAlumnos);
router.post('/getAlumno/', alumnos.getAlumno);
router.post('/insertParentesco/', alumnos.insertParentesco);
router.post('/getAlumnoForPadre/', alumnos.getAlumnoForPadre);

module.exports = router
