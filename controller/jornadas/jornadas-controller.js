
var getJornadas = require('./getJornadas')
var insertJornada = require('./insertJornada')
var updateJornada = require('./updateJornada')
var deleteJornada = require('./deleteJornada')
var getHorasJornadas = require('./getHorasJornadas')
var insertHorasJornadas = require('./insertHorasJornadas')
var getDias = require('./getDias')
var insertClasesHorariosetDias = require('./insertClasesHorariosetDias')




exports.getJornadas = getJornadas.getJornadas;
exports.insertJornada = insertJornada.insertJornada;
exports.updateJornada = updateJornada.updateJornada;
exports.deleteJornada = deleteJornada.deleteJornada;
exports.getHorasJornadas = getHorasJornadas.getHorasJornadas;
exports.insertHorasJornadas = insertHorasJornadas.insertHorasJornadas;
exports.getDias = getDias.getDias;
exports.insertClasesHorariosetDias = insertClasesHorariosetDias.insertClasesHorariosetDias;
