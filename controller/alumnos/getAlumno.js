const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getAlumno = async function(req, res, next) {

  let alumno;
  alumno = await pg.func('public.ft_view_get_alumno', req.body.identidad).catch(err => {
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
    res.send(alumno)
  }



}
