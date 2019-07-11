const pg = require('../../configuracion/ps_connection')


exports.getHorariosClases = async function(req, res, next) {

  // [req.body.p_id_grado,req.body.p_id_jornada,req.body.p_id_seccion]

  console.log(JSON.stringify(req.body));
  let horariosClases;
  horariosClases = await pg.func('public.ft_view_clases_horarios', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (horariosClases.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(horariosClases[0]["ft_view_clases_horarios"][0]["dias_horas_materias"])
  }



}