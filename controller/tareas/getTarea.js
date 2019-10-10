const pg = require('../../configuracion/ps_connection')


exports.getTarea = async function(req, res, next) {


  let tarea;
  tarea = await pg.func('public.ft_view_tareas', req.body.id_clase).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (tarea.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(tarea)
  }

}
