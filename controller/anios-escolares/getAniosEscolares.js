const pg = require('../../configuracion/ps_connection')


exports.getAniosEscolares = async function(req, res, next) {

// res.send("aaaaaaaaaaaaaaa")

let anio_escolar;
 anio_escolar= await pg.func('public.ft_view_anio_escolar',[req.body.id_colegio, req.body.id_anio_escolar]).catch(err=>{
   console.log(err);
   res.send({
     status:false
   })
 })

 if(res.statusCode != 200){
   return
 }

 if(anio_escolar.length==0){
   res.send({
     status:false
   })
 }else{
   res.send(anio_escolar)
 }





}
