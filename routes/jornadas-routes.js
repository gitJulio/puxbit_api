let express = require('express')
let router = express.Router()
let jornadas = require('../controller/jornadas/jornadas-controller')


router.post('/getJornadas/', jornadas.getJornadas);
router.post('/insertJornada/', jornadas.insertJornada);
router.post('/updateJornada/', jornadas.updateJornada);
router.post('/deleteJornada/', jornadas.deleteJornada);


module.exports = router
