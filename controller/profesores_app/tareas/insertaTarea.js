const pg = require('../../../configuracion/ps_connection')

exports.insertaTarea = async function(req, res, next) {

  let consulta;
  consulta = await pg.func('public.ft_proc_tareas_insert', JSON.stringify(req.body)).catch(err => {
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

    res.send(consulta[0]["ft_proc_tareas_insert"])
  }

}