const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.insertEncargado = async function(req, res, next) {


  let alumno;
  alumno = await pg.func('public.ft_proc_insert_encargado', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (alumno.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: alumno[0]["ft_proc_insert_encargado"]
    })
  }



}