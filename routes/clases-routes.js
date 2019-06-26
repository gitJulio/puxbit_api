let express = require('express')
let router = express.Router()
let clases = require('../controller/clases/clases-controller')


router.post('/insertClase/', clases.insertClase);
router.post('/updateClase/', clases.updateClase);
router.post('/deleteClase/', clases.deleteClase);

module.exports = router
