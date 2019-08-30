let express = require('express')
let router = express.Router()
let nivelesEducativos = require('../controller/nivelesEducativos/nivelesEducativos-controller')
var mdAunt = require('../middlewares/autenticacion.js')

router.use(mdAunt.content_type)
router.use(mdAunt.api_key)
router.use(mdAunt.verificaToken)

router.post('/getNivelesEducativos/', nivelesEducativos.getNivelesEducativos);
router.post('/insertNivelEducativo/', nivelesEducativos.insertNivelEducativo);
router.post('/updateNivelEducativo/', nivelesEducativos.updateNivelEducativo);
router.post('/deleteNivelEducativo/', nivelesEducativos.deleteNivelEducativo);

module.exports = router