const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.getMeses = async function(req, res, next) {


  let meses;
  meses = await pg.func('public.ft_view_meses').catch(err => {
    console.log(err);
  })
  if (res.statusCode != 200) {
    return
  }

  if (meses.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send(meses)
  }



}