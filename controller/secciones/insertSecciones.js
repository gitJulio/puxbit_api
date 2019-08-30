const pg = require('../../configuracion/ps_connection')

exports.insertSecciones = async function(req, res, next) {


  let insertSecciones;
  insertSecciones = await pg.func('public.ft_proc_insert_secciones',[process.env.id_colegio,req.body.descripcion]).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (insertSecciones.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status:insertSecciones[0]["ft_proc_insert_secciones"]
    })
  }


}
