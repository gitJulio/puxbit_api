let express = require('express')
let router = express.Router()
let alumnos = require('../controller/alumnos/alumnos-controller')


router.post('/insertAlumno/', alumnos.insertAlumno);
router.post('/getAlumnos/', alumnos.getAlumnos);

module.exports = router
