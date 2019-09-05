const pg = require('../../configuracion/ps_connection')



exports.getDataUsuario = async function(req, res, next) {




  let dataUsuario;

  if (process.env.id_nivel == 1) {
    /*Data administrador*/
  }

  if (process.env.id_nivel == 2) {
    dataUsuario = await pg.func('public.ft_view_profesor_clases', process.env.id_usuario).catch(err => {
      console.log(err);
      res.send({
        status: false
      })
    })

    if (res.statusCode != 200) {
      return
    }

    if (dataUsuario.length == 0) {
      res.send({
        status: false
      })
    } else {
      res.send(dataUsuario[0]["ft_view_profesor_clases"])
    }
  }

  if (process.env.id_nivel == 3) {
    /*Data padre*/
  }

  if (process.env.id_nivel == 4) {
    /*Data alumno*/
  }


}