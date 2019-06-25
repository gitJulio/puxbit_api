let express = require('express')
let router = express.Router()
let grados = require('../controller/grados/grados-controller')


router.post('/insertGrado/', grados.insertGrado);

module.exports = router
