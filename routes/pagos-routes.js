let express = require('express')
let router = express.Router()
let pagos = require('../controller/pagos/pagos-controller')

router.post('/getPagos/', pagos.getPagos)
router.post('/insertMensualidadesPagos/', pagos.insertMensualidadesPagos)

module.exports=router
