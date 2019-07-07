let express = require('express')
let router = express.Router()
let jornadas = require('../controller/jornadas/jornadas-controller')


router.post('/getJornadas/', jornadas.getJornadas);


module.exports = router
