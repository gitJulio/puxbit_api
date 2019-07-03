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

app.get('/', function(req, res) {
  res.send('Hello Puxbit!')
})

// app.listen(3000)
app.listen(process.env.PORT, () => {
  console.log("Api Puxbit");
})
