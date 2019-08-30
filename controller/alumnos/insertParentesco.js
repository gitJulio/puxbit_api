const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.insertParentesco = async function(req, res, next) {


  let parentesco;
  parentesco = await pg.func('public.ft_proc_insert_parentesco', [req.body.id_alumno, req.body.id_padre, req.body.parentesco]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (parentesco.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: parentesco[0]["ft_proc_insert_parentesco"]
    })
  }



}