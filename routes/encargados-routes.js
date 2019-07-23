let express = require('express')
let router = express.Router()
let encargados = require('../controller/encargados/encargados-controller')


router.post('/insertEncargado/', encargados.insertEncargado);
// router.post('/getAlumnos/', alumnos.getAlumnos);
// router.post('/eliminarAlumno/', alumnos.eliminarAlumno);
// router.post('/updateAlumnos/', alumnos.updateAlumnos);

module.exports = router
