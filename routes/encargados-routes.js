let express = require('express')
let router = express.Router()
let encargados = require('../controller/encargados/encargados-controller')


router.post('/insertEncargado/', encargados.insertEncargado);
router.post('/getEncargados/', encargados.getEncargados);
// router.post('/eliminarAlumno/', encargados.eliminarAlumno);
// router.post('/updateAlumnos/', encargados.updateAlumnos);

module.exports = router
