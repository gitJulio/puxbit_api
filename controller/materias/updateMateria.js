const pg = require('../../configuracion/ps_connection')


exports.updateMateria = async function(req, res, next) {



  let upMateria;
  upMateria = await pg.func('public.ft_proc_update_materia', [req.body.id_materia, req.body.descripcion]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (upMateria.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status:upMateria[0]["ft_proc_update_materia"]
    })
  }

}
