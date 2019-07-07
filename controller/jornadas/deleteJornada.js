const pg = require('../../configuracion/ps_connection')


exports.deleteJornada = async function(req, res, next) {



  let updateJornada;
  updateJornada = await pg.func('public.ft_proc_delete_jornadas', req.body.id_jornada).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (updateJornada.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: updateJornada[0]["ft_proc_delete_jornadas"]
    })
  }




}
