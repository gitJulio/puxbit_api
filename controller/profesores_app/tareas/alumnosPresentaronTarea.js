const pg = require('../../../configuracion/ps_connection')

exports.alumnosPresentaronTarea = async function(req, res, next) {
    
  let consulta;
  consulta = await pg.func('public.ft_view_alumnos_presentaron_tarea', req.body.id_tarea).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (consulta.length == 0) {
    res.send({
      status: false
    })
  } else {

    res.send(consulta)
  }

}