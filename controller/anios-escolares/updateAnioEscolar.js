const pg = require('../../configuracion/ps_connection')


exports.updateAnioEscolar = async function(req, res, next) {



let anio_escolar;
 anio_escolar= await pg.func('public.ft_proc_update_anio_escolar',[process.env.id_anio_escolar, req.body.anio_en_curso]).catch(err=>{
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
   res.send({status:anio_escolar[0]["ft_proc_update_anio_escolar"]})
 }





}
