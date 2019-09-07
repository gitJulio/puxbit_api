const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.insertProfesores = async function(req, res, next) {



  // let data_profesor = [{
  //   correo: req.body.correo,
  //   direccion: req.body.direccion,
  //   fecha_nacimiento: req.body.fecha_nacimiento,
  //   identidad: req.body.identidad,
  //   nombre: req.body.nombre,
  //   salario: req.body.salario,
  //   sexo: req.body.sexo,
  //   telefono: req.body.telefono,
  //   id_colegio: process.env.id_colegio
  ///
  // }]

  req.body[0].id_colegio = process.env.id_colegio
  let profesor;
  profesor = await pg.func('public.ft_proc_insert_profesor', JSON.stringify(req.body)).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (profesor.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: profesor[0]["ft_proc_insert_profesor"]
    })
  }


}
