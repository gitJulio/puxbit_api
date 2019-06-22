const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.insertProfesores = async function(req, res, next) {


  let profesor;
  profesor = await pg.func('public.ft_proc_insert_profesor',JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (profesor.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(profesor[0]["ft_proc_insert_profesor"])
  }


}
