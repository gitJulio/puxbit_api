let express = require('express')
let router = express.Router()
let horarios = require('../controller/horarios/horarios-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/insertClasesHorariosetDias/', horarios.insertClasesHorariosetDias);
router.post('/getHorariosClases/', horarios.getHorariosClases);
router.post('/getClaseHorarioDia/', horarios.getClaseHorarioDia);


module.exports = router