const pg = require('../../configuracion/ps_connection')
exports.insertAsistenciaClase = async function(req, res, next) {


  let estado;

  req.body[0].id_colegio = process.env.id_colegio;
  req.body[0].id_usuario = process.env.id_usuario;
  req.body[0].id_anio_escolar = process.env.id_anio_escolar;
  let asistencia;
  asistencia = await pg.func('public.ft_proc_insert_detallle_asistencia', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  estado = asistencia[0]["ft_proc_insert_detallle_asistencia"];

  if (res.statusCode != 200) {
    return
  }
  if (asistencia.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {

    if (estado == 3) {
      res.send({
        mensage: "El día actual no está dentro del horario de clase"
      })
    }

    if (estado == 2) {
      res.send({
        mensage: "La hora actual está fuera del horario de clase"
      })
    }

    if (estado == 1) {
      res.send({
        mensage: "Asistencia registrada correctamente"
      })
    }


  }



}