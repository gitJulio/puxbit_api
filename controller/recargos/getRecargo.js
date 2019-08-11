const pg = require('../../configuracion/ps_connection')


exports.getRecargo = async function(req, res, next) {

// res.send("aaaaaaaaaaaaaaa")

let recargos;
 recargos= await pg.func('public.ft_view_recargos',[req.body.id_colegio, req.body.id_anio_escolar]).catch(err=>{
   console.log(err);
   res.send({
     status:false
   })
 })

 if(res.statusCode != 200){
   return
 }

 if(recargos.length==0){
   res.send({
     status:false
   })
 }else{
   res.send(recargos)
 }





}
