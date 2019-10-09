var express = require('express')
const bodyParser = require('body-parser');
const pg = require('./configuracion/ps_connection')
var app = express()
const readline = require("readline");

//***************cors*****************
var op = {
    origin: true,
    methods: ['POST', 'GET'],
    credentials: true,
    maxAge: 3600
}
var cors = require('cors')
    //************************************

// parse application/json
app.use(bodyParser.json())

////Rutas
// var sorteosRouter = require('./routes/sorteos-routes')
var alumnosRouter = require('./routes/alumnos-routes')
var estadisticasRouter = require('./routes/estadisticas-routes')
var clasesRouter = require('./routes/clases-routes')
var profesoresRouter = require('./routes/profesores-routes')
var nivelesEducativosRouter = require('./routes/nivelesEducativos-routes')
var gradosRouter = require('./routes/grados-routes')
var seccionesRouter = require('./routes/secciones-routes')
var materiasRouter = require('./routes/materias-routes')
var jornadasRouter = require('./routes/jornadas-routes')
var horariosRouter = require('./routes/horarios-routes')
var pagosRouter = require('./routes/pagos-routes')
var encargadosRotuer = require('./routes/encargados-routes')
var recargosRotuer = require('./routes/recargos-routes')
var anios_escolaresRotuer = require('./routes/anios-escolares-routes')
var usuariosRouter = require('./routes/usuarios-routes')
var usuariosRouter = require('./routes/usuarios-routes')
var dataUsuarioRouter = require('./routes/dataUsuario-routes')
var tareasRouter = require('./routes/tareas-routes')

//********Ruta Principal
// app.use('/api/', cors(op), sorteosRouter)
app.use('/api/alumnos', cors(op), alumnosRouter)
app.use('/api/estadisticas', cors(op), estadisticasRouter)
app.use('/api/clases', cors(op), clasesRouter)
app.use('/api/profesores', cors(op), profesoresRouter)
app.use('/api/nivelesEducativos', cors(op), nivelesEducativosRouter)
app.use('/api/grados', cors(op), gradosRouter)
app.use('/api/secciones', cors(op), seccionesRouter)
app.use('/api/materias', cors(op), materiasRouter)
app.use('/api/jornadas', cors(op), jornadasRouter)
app.use('/api/horarios', cors(op), horariosRouter)
app.use('/api/pagos', cors(op), pagosRouter)
app.use('/api/encargados', cors(op), encargadosRotuer)
app.use('/api/recargos', cors(op), recargosRotuer)
app.use('/api/anios-escolares', cors(op), anios_escolaresRotuer)
app.use('/api/usuarios', cors(op), usuariosRouter)
app.use('/api/dataUsuario', cors(op), dataUsuarioRouter)
app.use('/api/tareas', cors(op), tareasRouter)

app.get('/', function(req, res) {
    res.send('Hello Puxbit!')
})

// app.listen(3000)
app.listen(process.env.PORT, () => {
    console.log("Api Puxbit");
})
