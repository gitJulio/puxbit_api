let express = require('express')
let router = express.Router()
let recargos = require('../controller/recargos/recargos-controller')

router.post('/getRecargo/', recargos.getRecargo)
router.post('/insertRecargo/', recargos.insertRecargo)
// router.post('/getPrecioGrados/', pagos.getPrecioGrados)

module.exports=router
