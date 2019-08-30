const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.updateEncargado = async function(req, res, next) {


  let encargado;
  encargado = await pg.func('public.ft_proc_update_encargado', JSON.stringify(req.body)).catch(err => {
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
      status: encargado[0]["ft_proc_update_encargado"]
    })
  }



}