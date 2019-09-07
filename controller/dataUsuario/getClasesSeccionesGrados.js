const pg = require('../../configuracion/ps_connection')



exports.getClasesSeccionesGrados = async function(req, res, next) {

  let clasesSeccionGrados;
  clasesSeccionGrados = await pg.func('public.ft_view_profesor_clases_grados_secciones', [process.env.id_usuario, req.body.id_seccion, req.body.id_grado]).catch(err => {
    console.log(err);
    res.send({
      status: false
    })
  })

  if (res.statusCode != 200) {
    return
  }

  if (clasesSeccionGrados.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send(clasesSeccionGrados[0]["ft_view_profesor_clases_grados_secciones"])
  }


}