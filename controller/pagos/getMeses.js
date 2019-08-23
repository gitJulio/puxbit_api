const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.getMeses = async function(req, res, next) {

// res.send("aaaaaaaaaaaaaaa")

let meses;
 meses= await pg.func('public.ft_view_meses').catch(err=>{
   console.log(err);

 if(res.statusCode != 200){
   return
 }

 if(meses.length==0){
   res.send({
     status:false
   })
 }else{
   res.send(meses)
 }



}
