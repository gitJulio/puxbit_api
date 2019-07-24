const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getEncargados = async function(req, res, next) {

  let encargados;
  encargados = await pg.func('public.ft_view_get_encargados', req.body.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (encargados.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(encargados[0]["ft_view_get_encargados"])
  }



}
