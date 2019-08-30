const pg = require('../../configuracion/ps_connection')
const jwt = require('jsonwebtoken')

exports.getLogin = async function(req, res, next) {


  let body = req.body;

  let usuario =
    await pg.func('public.ft_view_get_usuario', [body.email, body.password]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      })
    })



  if (usuario && usuario != '') {
    let token = jwt.sign({
      id: usuario[0].id_usuario,
      nivel: usuario[0].nivel,
      id_colegio: usuario[0].id_colegio
    }, process.env.SEED, {
      expiresIn: process.env.CADUCIDAD_TOKEN
    });

    await pg.func('public.ft_proc_insertar_token', [token, usuario[0].id_usuario]).catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      })
    })

    res.send({
      ok: true,
      usuario: usuario[0].correo,
      token
    })
  } else {
    res.status(400).send({
      error: "usuario o contraseña invalidos"
    })
  }


}