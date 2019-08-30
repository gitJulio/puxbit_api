const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.getPagosAlumnos = async function(req, res, next) {



  let pagos;
  pagos = await pg.func('public.ft_view_pago_alumnos', [req.body.id_colegio, req.body.id_anio_escolar, req.body.id_jornada, req.body.id_seccion, req.body.id_grado]).catch(err => {
    console.log(err);
  })

  if (res.statusCode != 200) {
    return
  }

  if (pagos.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send(pagos[0]["ft_view_pago_alumnos"])
  }

  //
  // let nivelesEducativos;
  // nivelesEducativos = await pg.func('public.ft_view_obtener_niveles_educativos',req.body.id_colegio).catch(err => {
  //   console.log(err)
  // })
  //
  // if (res.statusCode != 200) {
  //   return
  // }
  // if (nivelesEducativos.length == 0) {
  //   res.send([{
  //     status: 'false'
  //   }])
  // } else {
  //   res.send(nivelesEducativos)
  // }


}