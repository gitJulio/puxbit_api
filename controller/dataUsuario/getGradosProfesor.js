const pg = require('../../configuracion/ps_connection')



exports.getGradosProfesor = async function(req, res, next) {

  let gradosProfesor;
  gradosProfesor = await pg.func('public.ft_view_data_profesor_grados', process.env.id_usuario).catch(err => {
    console.log(err);
    res.send({
      status: false
    })
  })

  if (res.statusCode != 200) {
    return
  }

  if (gradosProfesor.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send(gradosProfesor[0]["ft_view_data_profesor_grados"])
  }


}