const pg = require('../../configuracion/ps_connection')


exports.getHorasJornadas = async function(req, res, next) {



  let horasJornadas;
  horasJornadas = await pg.func('public.ft_view_horas_jornadas', req.body.id_jornada).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (horasJornadas.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(horasJornadas)
  }

}
