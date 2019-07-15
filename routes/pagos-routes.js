let express = require('express')
let router = express.Router()
let pagos = require('../controller/pagos/pagos-controller')

router.post('/getPagos/', pagos.getPagos)

module.exports=router
