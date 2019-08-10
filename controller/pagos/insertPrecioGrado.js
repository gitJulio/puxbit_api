const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.insertPrecioGrado = async function(req, res, next) {

// res.send("aaaaaaaaaaaaaaa")

let pagos;
 pagos= await pg.func('public.ft_proc_insert_detalle_mensualidad',JSON.stringify(req.body)).catch(err=>{
   console.log(err);
   res.send({
     status:false
   })
 })

 if(res.statusCode != 200){
   return
 }

 if(pagos.length==0){
   res.send({
     status:false
   })
 }else{
   res.send({
     status:pagos[0]["ft_proc_insert_detalle_mensualidad"]
   })
 }





}
