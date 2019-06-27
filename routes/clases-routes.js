let express = require('express')
let router = express.Router()
let clases = require('../controller/clases/clases-controller')


router.post('/insertClase/', clases.insertClase);
router.post('/updateClase/', clases.updateClase);
router.post('/deleteClase/', clases.deleteClase);
router.post('/getClase/', clases.getClase);
router.post('/actualizaClase/', clases.actualizaClase);

module.exports = router