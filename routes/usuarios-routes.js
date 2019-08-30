let express = require('express')
let router = express.Router()
let usuarios = require('../controller/usuarios/usuarios-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)

router.post('/getLogin', usuarios.getLogin)

router.post('/actualizaToken', usuarios.actualizaToken)

module.exports = router