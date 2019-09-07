const pg = require('../../configuracion/ps_connection')



exports.getSeccionesGradoProfesor = async function(req, res, next) {

  let seccionesProfesor;
  seccionesProfesor = await pg.func('public.ft_view_profesor_secciones_grados', [process.env.id_usuario, req.body.id_grado]).catch(err => {
    console.log(err);
    res.send({
      status: false
    })
  })

  if (res.statusCode != 200) {
    return
  }

  if (seccionesProfesor.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send(seccionesProfesor[0]["ft_view_profesor_secciones_grados"])
  }


}