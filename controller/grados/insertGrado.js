const pg = require('../../configuracion/ps_connection')


exports.insertGrado = async function(req, res, next) {



  let data_grado=[{
    id_colegio:process.env.id_colegio,
    id_anio_escolar:process.env.id_anio_escolar,
    id_nivel_educativo:req.body.id_nivel_educativo,
    descripcion:req.body.descripcion
  }]


  let insertarGrado;
  insertarGrado = await pg.func('public.ft_proc_insert_grado', JSON.stringify(data_grado)).catch(err => {
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
      status: insertarGrado[0]["ft_proc_insert_grado"]
    })
  }




}
