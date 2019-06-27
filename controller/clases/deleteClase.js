const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.deleteClase = async function(req, res, next) {


  console.log("Aaaaaaaaa");
  let delClase;
  delClase = await pg.func('public.ft_proc_elimina_clase', req.body.id_clase).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (delClase.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: delClase[0]["ft_proc_elimina_clase"]
    })
  }




}