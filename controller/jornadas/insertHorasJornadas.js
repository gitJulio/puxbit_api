const pg = require('../../configuracion/ps_connection')


exports.insertHorasJornadas = async function(req, res, next) {



  let horasJornadas;
  horasJornadas = await pg.func('public.ft_proc_insert_horas_jornadas', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (horasJornadas.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status:horasJornadas[0]["ft_proc_insert_horas_jornadas"]
    })
  }

}
