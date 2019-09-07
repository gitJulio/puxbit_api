const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.insertAlumno = async function(req, res, next) {

  req.body[0].idcolegio = process.env.id_colegio
  req.body[0].id_anio_escolar = process.env.id_anio_escolar



  let alumno;
  alumno = await pg.func('public.ft_proc_insertar_alumno', JSON.stringify(req.body)).catch(err => {
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
    res.send({
      status: alumno[0]["ft_proc_insertar_alumno"]
    })
  }



}