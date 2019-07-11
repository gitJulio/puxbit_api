let express = require('express')
let router = express.Router()
let horarios = require('../controller/horarios/horarios-controller')


router.post('/insertClasesHorariosetDias/', horarios.insertClasesHorariosetDias);


module.exports = router
