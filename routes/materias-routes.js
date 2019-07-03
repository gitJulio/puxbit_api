let express = require('express')
let router = express.Router()
let materias = require('../controller/materias/materias-controller')



router.post('/getMaterias/', materias.getMaterias);

module.exports = router
