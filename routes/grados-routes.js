let express = require('express')
let router = express.Router()
let grados = require('../controller/grados/grados-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)

router.post('/insertGrado/', grados.insertGrado);
router.post('/getGrados/', grados.getGrados);
router.post('/deleteGrado/', grados.deleteGrado);
router.post('/updateGrado/', grados.updateGrado);
router.post('/getClasesGrado/', grados.getClasesGrado);
router.post('/getGradosNivel/', grados.getGradosNivel);

module.exports = router