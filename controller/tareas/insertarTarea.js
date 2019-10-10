const pg = require('../../configuracion/ps_connection')


exports.insertarTarea = async function(req, res, next) {




  let tarea;
  tarea = await pg.func('public.ft_proc_insert_tarea', JSON.stringify(req.body)).catch(err => {
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
    res.send(tarea[0]["ft_proc_insert_tarea"])
  }

}
