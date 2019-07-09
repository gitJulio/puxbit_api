let express = require('express')
let router = express.Router()
let jornadas = require('../controller/jornadas/jornadas-controller')


router.post('/getJornadas/', jornadas.getJornadas);
router.post('/insertJornada/', jornadas.insertJornada);
router.post('/updateJornada/', jornadas.updateJornada);
router.post('/deleteJornada/', jornadas.deleteJornada);
router.post('/getHorasJornadas/', jornadas.getHorasJornadas);
router.post('/insertHorasJornadas/', jornadas.insertHorasJornadas);


module.exports = router
