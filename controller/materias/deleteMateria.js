const pg = require('../../configuracion/ps_connection')


exports.deleteMateria = async function(req, res, next) {



  let delMateria;
  delMateria = await pg.func('public.ft_proc_eliminar_materia', req.body.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (delMateria.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status:delMateria[0]["ft_proc_eliminar_materia"]
    })
  }

}
