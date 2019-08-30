let express = require('express')
let router = express.Router()
let recargos = require('../controller/recargos/recargos-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/getRecargo/', recargos.getRecargo)
router.post('/insertRecargo/', recargos.insertRecargo)
// router.post('/getPrecioGrados/', pagos.getPrecioGrados)

module.exports = router