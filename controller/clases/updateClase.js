const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.updateClase = async function(req, res, next) {

  console.log("aaaaaa");

  let upClase;
  upClase = await pg.func('public.ft_proc_update_clase', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (upClase.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: upClase[0]["ft_proc_update_clase"]
    })
  }




}