let express = require('express')
let router = express.Router()
let estadisticas = require('../controller/estadisticas/estadisticas-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)

router.post('/getEstadisticas/', estadisticas.getEstadisticas);

module.exports = router