const pg = require('../../configuracion/ps_connection')


exports.updateNivelEducativo = async function(req, res, next) {


  let upNivelEducativo;
  upNivelEducativo = await pg.func('public.ft_proc_update_nivel_educativo',[process.env.id_colegio, req.body.descripcion, req.body.id_nivel_educativo]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (upNivelEducativo.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(upNivelEducativo[0]["ft_proc_update_nivel_educativo"])
  }

}
