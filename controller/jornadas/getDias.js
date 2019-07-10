const pg = require('../../configuracion/ps_connection')


exports.getDias = async function(req, res, next) {



  let dias;
  dias = await pg.func('public.ft_view_dias').catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (dias.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send(dias)
  }

}
