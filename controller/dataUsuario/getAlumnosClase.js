const pg = require('../../configuracion/ps_connection')



exports.getAlumnosClase = async function(req, res, next) {

  let alumnosClase;

  alumnosClase = await pg.func('public.ft_view_lista_alumnos_clases', req.body.id_clase).catch(err => {
    console.log(err);
    res.send({
      status: false
    })
  })

  if (res.statusCode != 200) {
    return
  }

  if (alumnosClase.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send(alumnosClase[0]["ft_view_lista_alumnos_clases"])
  }

}