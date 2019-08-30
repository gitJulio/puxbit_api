const pg = require('../../configuracion/ps_connection')
const readline = require("readline");


exports.getPrecioGrados = async function(req, res, next) {



  let pagos;
  pagos = await pg.func('public.ft_view_pagos_mensualidades', [process.env.id_anio_escolar, process.env.id_colegio]).catch(err => {
    console.log(err);
  })

  // console.log("**********");
  // console.log(pagos);
  // console.log("**********");
  if (res.statusCode != 200) {
    return
  }

  if (pagos.length == 0) {
    res.send({
      status: false
    })
  } else {
    res.send(pagos)
  }




}