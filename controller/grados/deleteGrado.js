const pg = require('../../configuracion/ps_connection')


exports.deleteGrado = async function(req, res, next) {



  let delGrado;
  delGrado = await pg.func('public.ft_proc_elimina_grado',JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (delGrado.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(delGrado[0]["ft_proc_elimina_grado"])
  }






}
