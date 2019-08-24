let express = require('express')
let router = express.Router()
let pagos = require('../controller/pagos/pagos-controller')
var mdAunt = require('../middlewares/autenticacion.js')

/* uso de middleware */
router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
// router.use(mdAunt.token_validation)

router.post('/getPagos/', pagos.getPagos)
router.post('/insertPrecioGrado/', pagos.insertPrecioGrado)
router.post('/getPrecioGrados/', pagos.getPrecioGrados)
router.post('/updatePrecioGrados/', pagos.updatePrecioGrados)
router.post('/deletePrecioGrado/', pagos.deletePrecioGrado)
router.post('/insertPagosAlumnos/', pagos.insertPagosAlumnos)
router.post('/getPagosAlumnos/', pagos.getPagosAlumnos)
router.post('/getMeses/', pagos.getMeses)

module.exports=router
