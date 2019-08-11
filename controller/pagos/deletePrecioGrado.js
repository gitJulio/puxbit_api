const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.deletePrecioGrado = async function(req, res, next) {



let deletePrecio;
 deletePrecio= await pg.func('public.ft_proc_delete_precio_pago',req.body.id_precio).catch(err=>{
   console.log(err);
   res.send({
     status:false
   })
 })

 if(res.statusCode != 200){
   return
 }

 if(deletePrecio.length==0){
   res.send({
     status:false
   })
 }else{
   res.send(deletePrecio[0]["ft_proc_delete_precio_pago"])
 }


}
