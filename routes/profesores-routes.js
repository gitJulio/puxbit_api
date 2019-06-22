let express = require('express')
let router = express.Router()
let profesores = require('../controller/profesores/profesores-controller')


router.post('/insertProfesores/', profesores.insertProfesores);
router.post('/getProfesores/', profesores.getProfesores);

module.exports = router
