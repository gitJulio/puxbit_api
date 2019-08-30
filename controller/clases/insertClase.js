const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.insertClase = async function(req, res, next) {



  let clase;
  clase = await pg.func('public.ft_proc_inserta_clase', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (clase.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: clase[0]["ft_proc_inserta_clase"]
    })
  }




}