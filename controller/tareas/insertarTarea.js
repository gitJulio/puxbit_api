const pg = require('../../configuracion/ps_connection')


exports.insertarTarea = async function(req, res, next) {



  let grados;
  grados = await pg.func('public.ft_proc_insert_tarea', process.env.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (grados.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(grados)
  }

}
