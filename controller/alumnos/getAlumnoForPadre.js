const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.getAlumnoForPadre = async function(req, res, next) {

  let alumno;
  alumno = await pg.func('public.ft_view_devuelve_alumno_padre', req.body.id_padre).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (alumno.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(alumno[0]["ft_view_devuelve_alumno_padre"])
  }



}