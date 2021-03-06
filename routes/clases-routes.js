let express = require('express')
let router = express.Router()
let clases = require('../controller/clases/clases-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/insertClase/', clases.insertClase);
router.post('/updateClase/', clases.updateClase);
router.post('/deleteClase/', clases.deleteClase);
router.post('/getClase/', clases.getClase);
router.post('/insertAsistenciaClase/', clases.insertAsistenciaClase);
router.post('/getRepasoAsistencia/', clases.getRepasoAsistencia);
router.post('/getMesesClases/', clases.getMesesClases);
router.post('/getDiasAsistenciaAlumnos/', clases.getDiasAsistenciaAlumnos);


module.exports = router