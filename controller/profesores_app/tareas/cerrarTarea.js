const pg = require('../../../configuracion/ps_connection')

exports.cerrarTarea = async function(req, res, next) {

  let consulta;
  consulta = await pg.func('public.ft_proc_tareas_cerrar', req.body.id_tarea).catch(err => {
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

    res.send({
      status: consulta[0]["ft_proc_tareas_cerrar"]
    })
  }

}