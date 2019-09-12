const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.getRepasoAsistencia = async function(req, res, next) {

  req.body[0].id_colegio = process.env.id_colegio;
  req.body[0].id_anio_escolar = process.env.id_anio_escolar;

  console.log(JSON.stringify(req.body));
  let clase;
  clase = await pg.func('public.ft_proc_desibled_boton', JSON.stringify(req.body)).catch(err => {
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
    res.send(clase[0]["ft_proc_desibled_boton"])
  }




}