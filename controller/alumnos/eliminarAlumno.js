const pg = require('../../configuracion/ps_connection')
const readline = require("readline");
var fs = require('fs');

exports.eliminarAlumno = async function(req, res, next) {

  /*
    [{"nombre":"Valery Nicole","identidad":"1804-158","id_pais":1,"fecha_nacimiento":"31/03/1988","sexo":"M","tipo_sangre":"A+","idcolegio":1,"id_anio_escolar":1,"direccion_domicilio":"Colonia Nuevo San Juan","id_nivel_academico":1,"id_grado":1,"id_jornada":1,"id_carrera":null,"telefono":"88865900"}]
  */

  let alumno;
  alumno = await pg.func('public.ft_proc_elimina_alumno', req.body.id_alumno).catch(err => {
    console.log(err)
  })

  if (res.statusCode != 200) {
    return
  }
  if (alumno.length == 0) {
    res.send([{
      status: 'false'
    }])
  } else {
    res.send({
      status: alumno[0]["ft_proc_elimina_alumno"]
    })
  }



}
