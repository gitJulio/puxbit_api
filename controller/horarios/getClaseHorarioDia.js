const pg = require('../../configuracion/ps_connection')


exports.getClaseHorarioDia = async function(req, res, next) {

  // [req.body.p_id_grado,req.body.p_id_jornada,req.body.p_id_seccion]

  console.log(JSON.stringify(req.body));
  let horariosClases;
  horariosClases = await pg.func('public.ft_view_tabla_horarios_clases', JSON.stringify(req.body)).catch(err => {
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
    res.send({
      id_clase:horariosClases[0]["ft_view_tabla_horarios_clases"]
    })
  }



}
