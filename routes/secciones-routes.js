let express = require('express')
let router = express.Router()
let secciones = require('../controller/secciones/secciones-controller')


router.post('/getSecciones/', secciones.getSecciones);
router.post('/insertSecciones/', secciones.insertSecciones);


module.exports = router
