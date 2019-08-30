const pg = require('../../configuracion/ps_connection')


exports.insertRecargo = async function(req, res, next) {



  let pagos;
  pagos = await pg.func('public.ft_proc_insert_detalle_mensualidad', JSON.stringify(req.body)).catch(err => {
    console.log(err);
    res.send({
      status: false
    })
  })

  if (res.statusCode != 200) {
    return
  }

  if (pagos.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send({
      status: pagos[0]["ft_proc_insert_detalle_mensualidad"]
    })
  }





}