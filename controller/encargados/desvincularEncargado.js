const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.desvincularEncargado = async function(req, res, next) {


  let encargado;
  encargado = await pg.func('public.ft_proc_desvincular_encargado', [req.body.idpadre, req.body.idalumno]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (encargado.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: encargado[0]["ft_proc_desvincular_encargado"]
    })
  }



}
