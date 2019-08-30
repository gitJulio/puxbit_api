const pg = require('../../configuracion/ps_connection')


exports.insertNivelEducativo = async function(req, res, next) {


  let nivelEducativo;
  nivelEducativo = await pg.func('public.ft_proc_inserta_nivel_educativo',[process.env.id_colegio, req.body.descripcion]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (nivelEducativo.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(nivelEducativo[0]["ft_proc_inserta_nivel_educativo"])
  }


}
