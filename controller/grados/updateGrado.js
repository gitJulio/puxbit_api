const pg = require('../../configuracion/ps_connection')


exports.updateGrado = async function(req, res, next) {



  let upGrado;
  upGrado = await pg.func('public.ft_proc_update_grado',JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (upGrado.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(upGrado[0]["ft_proc_update_grado"])
  }






}
