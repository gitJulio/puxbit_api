const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getProfesores = async function(req, res, next) {


  let profesores;
  profesores = await pg.func('public.ft_view_profesores',1).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (profesores.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(profesores)
  }


}