let express = require('express')
let router = express.Router()
let alumnosPresentaronTarea = require('../../controller/profesores_app/tareas/tareas-profesores-controller')
var mdAunt = require('../../middlewares/autenticacion')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/alumnosPresentaronTarea/', alumnosPresentaronTarea.alumnosPresentaronTarea)
router.post('/insertaTarea/', alumnosPresentaronTarea.insertaTarea)



module.exports = router