const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getAlumnos = async function(req, res, next) {

  let alumnos;
  alumnos = await pg.func('public.ft_view_get_alumnos', [req.body.id_colegio, req.body.id_anio_escolar]).catch(err => {
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
