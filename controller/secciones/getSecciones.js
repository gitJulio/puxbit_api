const pg = require('../../configuracion/ps_connection')

exports.getSecciones = async function(req, res, next) {


  let secciones;
  secciones = await pg.func('public.ft_view_secciones',req.body.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (secciones.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(secciones)
  }


}
