const pg = require('../../configuracion/ps_connection')
exports.insertAsistenciaClase = async function(req, res, next) {


  let estado;

  req.body[0].id_colegio = process.env.id_colegio;
  req.body[0].id_usuario = process.env.id_usuario;
  req.body[0].id_anio_escolar = process.env.id_anio_escolar;

  console.log(req.body[0].tipo_asistencia);

  if (req.body[0].tipo_asistencia == 2) {
    let asistencia;
    asistencia = await pg.func('public.ft_insert_repaso_lista', JSON.stringify(req.body)).catch(err => {
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
        mensaje: "Asistencia terminada correctamente"
      })
    }


  } else {

    let asistencia;
    asistencia = await pg.func('public.ft_proc_insert_detalle_asistencia', JSON.stringify(req.body)).catch(err => {
      console.log(err)
    })

    estado = asistencia[0]["ft_proc_insert_detalle_asistencia"];


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
          mensaje: "El día actual no está dentro del horario de clase"
        })
      }

      if (estado == 2) {
        res.send({
          mensaje: "La hora actual está fuera del horario de clase"
        })
      }

      if (estado == 1) {
        res.send({
          mensaje: "Asistencia registrada correctamente"
        })
      }
    }


  }



}