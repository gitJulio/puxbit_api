const pg = require('../../configuracion/ps_connection')


exports.deleteTarea  = async function(req, res, next) {


  let tarea;
  tarea = await pg.func('public.ft_proc_delete_tarea', req.body.id_tarea).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (tarea.length == 0) {
    res.send([{
      status: false
    }])
  } else {
    let respuesta = tarea[0].ft_proc_delete_tarea
    res.send({status:respuesta})
  }

}
