let express = require('express')
let router = express.Router()
let materias = require('../controller/materias/materias-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/getMaterias/', materias.getMaterias);
router.post('/deleteMateria/', materias.deleteMateria);
router.post('/updateMateria/', materias.updateMateria);
router.post('/insertMateria/', materias.insertMateria);
router.post('/getVerificaMaterias/', materias.getVerificaMaterias);

module.exports = router