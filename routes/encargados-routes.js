let express = require('express')
let router = express.Router()
let encargados = require('../controller/encargados/encargados-controller')


router.post('/insertEncargado/', encargados.insertEncargado);
router.post('/getEncargados/', encargados.getEncargados);
router.post('/eliminarEncargado/', encargados.eliminarEncargado);
router.post('/updateEncargado/', encargados.updateEncargado);
router.post('/desvincularEncargado/', encargados.desvincularEncargado);

module.exports = router
