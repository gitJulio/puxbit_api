const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.getEncargados = async function(req, res, next) {

  let encargados;
  encargados = await pg.func('public.ft_view_get_encargados', req.body.id_colegio).catch(err => {
    console.log(err)
  })

  console.log(encargados);
  if (res.statusCode != 200) {
    return
  }
  if (encargados.length == 0 || encargados[0]["ft_view_get_encargados"] == null) {
    res.send({
      status: 'false'
    })
  } else {
    res.send(encargados[0]["ft_view_get_encargados"])
  }



}