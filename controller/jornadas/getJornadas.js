const pg = require('../../configuracion/ps_connection')


exports.getJornadas = async function(req, res, next) {



  let jornadas;
  jornadas = await pg.func('public.ft_view_get_jornadas', req.body.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (jornadas.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(jornadas)
  }

}
