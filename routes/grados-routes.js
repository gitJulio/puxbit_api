let express = require('express')
let router = express.Router()
let grados = require('../controller/grados/grados-controller')


router.post('/insertGrado/', grados.insertGrado);
router.post('/getGrados/', grados.getGrados);
router.post('/deleteGrado/', grados.deleteGrado);
router.post('/updateGrado/', grados.updateGrado);

module.exports = router