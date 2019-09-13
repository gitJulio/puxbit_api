const pg = require('../../configuracion/ps_connection')



exports.getMesesClases = async function(req, res, next) {

  // req.body[0].id_colegio = process.env.id_colegio;
  // req.body[0].id_anio_escolar = process.env.id_anio_escolar;
  // console.log(req.body);
  let clase;
  clase = await pg.func('public.ft_view_mes_asistencia', req.body.id_clase).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (clase.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(clase[0]["ft_view_mes_asistencia"])
  }




}