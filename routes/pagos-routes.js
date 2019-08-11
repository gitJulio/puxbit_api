let express = require('express')
let router = express.Router()
let pagos = require('../controller/pagos/pagos-controller')

router.post('/getPagos/', pagos.getPagos)
router.post('/insertPrecioGrado/', pagos.insertPrecioGrado)
router.post('/getPrecioGrados/', pagos.getPrecioGrados)
router.post('/updatePrecioGrados/', pagos.updatePrecioGrados)

module.exports=router
