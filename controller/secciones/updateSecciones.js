const pg = require('../../configuracion/ps_connection')

exports.updateSecciones = async function(req, res, next) {


  let upSecciones;
  upSecciones = await pg.func('public.ft_proc_update_secciones',[req.body.id_seccion, req.body.descripcion]).catch(err => {
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
      status:upSecciones[0]["ft_proc_update_secciones"]
    })
  }


}
