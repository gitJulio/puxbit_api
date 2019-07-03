let express = require('express')
let router = express.Router()
let materias = require('../controller/materias/materias-controller')



router.post('/getMaterias/', materias.getMaterias);
router.post('/deleteMateria/', materias.deleteMateria);
router.post('/updateMateria/', materias.updateMateria);

module.exports = router
