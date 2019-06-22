let express = require('express')
let router = express.Router()
let estadisticas = require('../controller/estadisticas/estadisticas-controller')


router.post('/getEstadisticas/', estadisticas.getEstadisticas);

module.exports = router
