let express = require('express')
let router = express.Router()
let alumnos = require('../controller/alumnos/sorteos-controller')


router.post('/insertAlumno/', alumnos.insertAlumno);

module.exports = router