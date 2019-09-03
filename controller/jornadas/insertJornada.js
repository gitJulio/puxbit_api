const pg = require('../../configuracion/ps_connection')


exports.insertJornada = async function(req, res, next) {


  data_jornada=[{
    descripcion:req.body.descripcion,
    id_colegio:process.env.id_colegio,
    id_anio_escolar:process.env.id_anio_escolar
  }]

  let insertarJornada;
  insertarJornada = await pg.func('public.ft_proc_insertar_jornada', JSON.stringify(data_jornada)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (insertarJornada.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: insertarJornada[0]["ft_proc_insertar_jornada"]
    })
  }




}
