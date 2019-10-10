let express = require('express')
let router = express.Router()
let tareas = require('../controller/tareas/tareas-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/insertarTarea/', tareas.insertarTarea);
router.post('/getTarea/', tareas.getTarea);



module.exports = router
