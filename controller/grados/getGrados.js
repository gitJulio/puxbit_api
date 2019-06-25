const pg = require('../../configuracion/ps_connection')


exports.getGrados = async function(req, res, next) {



  let grados;
  grados = await pg.func('public.ft_view_get_grados_instituto',[req.body.id_colegio,req.body.id_nivel_educativo]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (grados.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(grados)
  }






}
