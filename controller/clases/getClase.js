const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getClase = async function(req, res, next) {



  let gClase;
  gClase = await pg.func('public.ft_view_clase', [req.body.id_grado, req.body.id_seccion]).catch(err => {
    console.log(err)
  })

  console.log(gClase);

  if (res.statusCode != 200) {
    return
  }
  if (gClase.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(gClase[0]["ft_view_clase"])
  }




}
