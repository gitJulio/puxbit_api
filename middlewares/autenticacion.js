let config = require('../configuracion/config')
let pg = require('../configuracion/ps_connection')
let jwt = require('jsonwebtoken')


module.exports.content_type = function(req, res, next) {
  if (req.get('content-type') == 'application/json') {
    next()
  } else {
    res.status(403).send('Error de headers mal enviadas')
  }
}

module.exports.api_key = function(req, res, next) {
  if (req.get('authorization') == config.app.api_key) {
    next()
  } else {
    res.status(403).send('Error de key api')
  }
}

// //**********verifica data_token

module.exports.verificaToken = (req, res, next) => {
  let token = req.get('token');
  // console.log(token);
  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      res.status(401).json({
        status: 'invalid'
      })
    }
    // console.log(decoded);
    process.env.id_colegio = decoded.id_colegio
    process.env.id_usuario = decoded.id
    process.env.id_anio_escolar = decoded.id_anio_escolar
    process.env.id_nivel = decoded.nivel
    req.id_colegio = decoded;
  })

  next();
}

// module.exports = {
//   verificaToken
// }