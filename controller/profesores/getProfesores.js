const pg = require('../../configuracion/ps_connection')



exports.getProfesores = async function(req, res, next) {


  let profesores;
  profesores = await pg.func('public.ft_view_profesores', process.env.id_colegio).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (profesores.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(profesores)
  }


}