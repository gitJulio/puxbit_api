let express = require('express')
let router = express.Router()
let jornadas = require('../controller/jornadas/jornadas-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)


router.post('/getJornadas/', jornadas.getJornadas);
router.post('/insertJornada/', jornadas.insertJornada);
router.post('/updateJornada/', jornadas.updateJornada);
router.post('/deleteJornada/', jornadas.deleteJornada);
router.post('/getHorasJornadas/', jornadas.getHorasJornadas);
router.post('/insertHorasJornadas/', jornadas.insertHorasJornadas);
router.post('/getDias/', jornadas.getDias);
router.post('/insertClasesHorariosetDias/', jornadas.insertClasesHorariosetDias);


module.exports = router