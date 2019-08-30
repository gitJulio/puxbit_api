const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.updatePrecioGrados = async function(req, res, next) {



  let pagos;
  pagos = await pg.func('public.ft_update_precio_grado', [req.body.id_precio, req.body.precio]).catch(err => {
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
      status: pagos[0]["ft_update_precio_grado"]
    })
  }




}