const pg = require('../../../configuracion/ps_connection')

exports.getHistorialTareas = async function(req, res, next) {

  let consulta;
  consulta = await pg.func('public.ft_view_tareas_historial', req.body.id_clase).catch(err => {
   console.log(err)
  })
    if (res.statusCode != 200) {
   return
  }
  if (consulta.length == 0) {
   res.send({
     status: false
     })
   } else {

     res.send(consulta)
   }



}
