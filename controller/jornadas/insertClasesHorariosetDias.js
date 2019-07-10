const pg = require('../../configuracion/ps_connection')


exports.insertClasesHorariosetDias = async function(req, res, next) {



console.log(req.body);
  let dias;
  dias = await pg.func('public.ft_proc_insertar_clase_horario', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (dias.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(
      {
        status:true
      }
    )
  }



}
