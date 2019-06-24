let express = require('express')
let router = express.Router()
let nivelesEducativos = require('../controller/nivelesEducativos/nivelesEducativos-controller')


router.post('/getNivelesEducativos/', nivelesEducativos.getNivelesEducativos);
router.post('/insertNivelEducativo/', nivelesEducativos.insertNivelEducativo);

module.exports = router
