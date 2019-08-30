const pg = require('../../configuracion/ps_connection')


exports.getGradosNivel = async function(req, res, next) {


  let gradosNivel;
  gradosNivel = await pg.func('public.ft_view_grados_nivel', [req.body.id_nivel, process.env.id_colegio]).catch(err => {
    console.log(err)
  })


  if (res.statusCode != 200) {
    return
  }
  if (gradosNivel.length == 0  || gradosNivel[0]["ft_view_grados_nivel"]==null) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(gradosNivel[0]["ft_view_grados_nivel"])
  }


}
