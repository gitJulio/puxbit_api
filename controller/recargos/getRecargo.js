const pg = require('../../configuracion/ps_connection')


exports.getRecargo = async function(req, res, next) {



  let recargos;
  recargos = await pg.func('public.ft_view_recargos', [process.env.id_colegio, process.env.id_anio_escolar]).catch(err => {
    console.log(err);
    res.send({
      status: false
    })
  })

  if (res.statusCode != 200) {
    return
  }

  if (recargos.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send(recargos)
  }





}