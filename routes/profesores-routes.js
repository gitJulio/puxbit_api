let express = require('express')
let router = express.Router()
let profesores = require('../controller/profesores/profesores-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)


router.post('/insertProfesores/', profesores.insertProfesores);
router.post('/getProfesores/', profesores.getProfesores);
router.post('/updateProfesores/', profesores.updateProfesores);
router.post('/deleteProfesores/', profesores.deleteProfesores);

module.exports = router