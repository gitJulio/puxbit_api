const pg = require('../../configuracion/ps_connection')


exports.getClasesGrado = async function(req, res, next) {



  let clasesGrados;
  clasesGrados = await pg.func('public.ft_view_grado_clases', req.body.id_grado).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (clasesGrados.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(clasesGrados)
  }


}