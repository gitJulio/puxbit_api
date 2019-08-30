let express = require('express')
let router = express.Router()
let secciones = require('../controller/secciones/secciones-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)

router.post('/getSecciones/', secciones.getSecciones);
router.post('/insertSecciones/', secciones.insertSecciones);
router.post('/deleteSecciones/', secciones.deleteSecciones);
router.post('/updateSecciones/', secciones.updateSecciones);


module.exports = router