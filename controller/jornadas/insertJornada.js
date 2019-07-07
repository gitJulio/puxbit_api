const pg = require('../../configuracion/ps_connection')


exports.insertJornada = async function(req, res, next) {



  let insertarGrado;
  insertarGrado = await pg.func('public.ft_proc_insertar_jornada', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (insertarGrado.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: insertarGrado[0]["ft_proc_insertar_jornada"]
    })
  }




}
