const pg = require('../../configuracion/ps_connection')


exports.deleteNivelEducativo = async function(req, res, next) {


  let delNivelEducativo;
  delNivelEducativo = await pg.func('public.ft_proc_eliminar_nivel_educativo',[process.env.id_colegio, req.body.id_nivel_educativo]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (delNivelEducativo.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    // res.send(delNivelEducativo[0]["ft_proc_eliminar_nivel_educativo"])
    res.send({
      status: delNivelEducativo[0]["ft_proc_eliminar_nivel_educativo"]
    })
  }

}
