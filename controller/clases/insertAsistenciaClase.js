const pg = require('../../configuracion/ps_connection')
exports.insertAsistenciaClase = async function(req, res, next) {




  req.body[0].id_colegio = process.env.id_colegio,
    req.body[0].id_anio_escolar = process.env.id_anio_escolar
  req.body[0].id_usuario = process.env.id_usuario
  let asistencia;
  asistencia = await pg.func('public.ft_proc_insert_detallle_asistencia', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (asistencia.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: asistencia[0]["ft_proc_insert_detallle_asistencia"]
    })
  }



}