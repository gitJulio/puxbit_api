let express=require('express')
let router=express.Router()
let usuarios =require('../controller/usuarios/usuarios-controller')


router.post('/getLogin', usuarios.getLogin)

module.exports = router


