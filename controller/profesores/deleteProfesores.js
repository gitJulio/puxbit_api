const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.deleteProfesores = async function(req, res, next) {


  let profesor;
  profesor = await pg.func('public.ft_proc_eliminar_profesor',req.body.idprofesor).catch(err => {
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
    // res.send(profesor[0]["ft_proc_insert_profesor"])

    res.send({
      status: profesor[0]["ft_proc_eliminar_profesor"]
    })
  }


}
