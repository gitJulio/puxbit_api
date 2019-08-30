const pg = require('../../configuracion/ps_connection')


exports.insertMateria = async function(req, res, next) {



  let insMaterias;
  insMaterias = await pg.func('public.ft_proc_inserta_materia', [process.env.id_colegio, req.body.descripcion, req.body.nota_aprueba]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (insMaterias.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status:insMaterias[0]["ft_proc_inserta_materia"]
    })
  }

}
