const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getPrecioGrados = async function(req, res, next) {

// res.send("aaaaaaaaaaaaaaa")

let pagos;
 pagos= await pg.func('public.ft_view_pagos_mensualidades',[req.body.id_anio_escolar, req.body.id_colegio]).catch(err=>{
   console.log(err);
 })

console.log("**********");
console.log(pagos);
console.log("**********");
 if(res.statusCode != 200){
   return
 }

 if(pagos.length==0){
   res.send({
     status:false
   })
 }else{
   res.send(pagos)
 }




}
