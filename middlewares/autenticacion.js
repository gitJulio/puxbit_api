let config = require('../configuracion/config')
let pg = require('../configuracion/ps_connection')

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
// const jwt = require('jsonwebtoken')

// let verificaToken = (req, res, next) => {
//   let token = req.get('token');
//   jwt.verify(token, process.env.SEED, (err, decoded) => {
//     if (err) {
//       res.status(401).json({
//         ok: false,
//         err
//       })
//     }
//     req.id = decoded.id;
//     req.nivel = decoded.nivel;
//   })

//   next();
// }


// module.exports = {
//   verificaToken
// }