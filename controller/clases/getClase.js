const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getClase = async function(req, res, next) {



  let gClase;
  gClase = await pg.func('public.ft_view_clases', req.body.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (gClase.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(gClase)
  }




}