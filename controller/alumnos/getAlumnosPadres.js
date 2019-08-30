const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.getAlumnos = async function(req, res, next) {

  let alumnos;
  alumnos = await pg.func('public.ft_view_get_alumnos', [process.env.id_colegio, process.env.id_anio_escolar, req.body.id_grado, req.body.id_seccion, req.body.id_jornada]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (alumnos.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(alumnos)
  }



}