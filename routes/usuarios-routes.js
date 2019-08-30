let express = require('express')
let router = express.Router()
let usuarios = require('../controller/usuarios/usuarios-controller')


router.post('/getLogin', usuarios.getLogin)
router.post('/actualizaToken', usuarios.actualizaToken)

module.exports = router