const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getEstadisticas = async function(req, res, next) {


  let estadisticas;
  estadisticas = await pg.func('public.ft_view_estadisticas_institucion',req.body.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (estadisticas.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(estadisticas)
  }







}
