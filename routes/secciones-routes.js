let express = require('express')
let router = express.Router()
let secciones = require('../controller/secciones/secciones-controller')


router.post('/getSecciones/', secciones.getSecciones);
router.post('/insertSecciones/', secciones.insertSecciones);
router.post('/deleteSecciones/', secciones.deleteSecciones);
router.post('/updateSecciones/', secciones.updateSecciones);


module.exports = router
