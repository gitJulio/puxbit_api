const pg = require('../../configuracion/ps_connection')

exports.deleteSecciones = async function(req, res, next) {


  let upSecciones;
  upSecciones = await pg.func('public.ft_proc_delete_seccion',req.body.id_seccion).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (upSecciones.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status:upSecciones[0]["ft_proc_delete_seccion"]
    })
  }


}
