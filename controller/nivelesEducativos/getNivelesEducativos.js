const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.getNivelesEducativos = async function(req, res, next) {


  let nivelesEducativos;
  nivelesEducativos = await pg.func('public.ft_view_obtener_niveles_educativos', process.env.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (nivelesEducativos.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(nivelesEducativos)
  }


}