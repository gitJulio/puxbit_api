const pg = require('../../configuracion/ps_connection')


exports.getVerificaMaterias = async function(req, res, next) {



  let materias;
  materias = await pg.func('public.ft_view_verifica_materias', [req.body.id_grado, req.body.id_seccion]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (materias.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(materias)
  }

}
