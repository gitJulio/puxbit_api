let express = require('express')
let router = express.Router()
let clases = require('../controller/clases/clases-controller')


router.post('/insertClase/', clases.insertClase);

module.exports = router
