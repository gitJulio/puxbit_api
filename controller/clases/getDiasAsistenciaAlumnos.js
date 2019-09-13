const pg = require('../../configuracion/ps_connection')



exports.getDiasAsistenciaAlumnos = async function(req, res, next) {

  let clase;
  clase = await pg.func('public.ft_view_alumnos_asistencia', req.body.id_clase).catch(err => {
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
    res.send(clase[0]["ft_view_alumnos_asistencia"])
  }




}