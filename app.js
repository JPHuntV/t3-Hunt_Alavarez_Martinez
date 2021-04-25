const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const db = require('./crud')





app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', function (request, response){
  response.json({info: 'prueba de servidor'})
})

app.get('/estudiantes',db.getEstudiantes)
app.post('/estudiante',db.createEstudiante)
app.put('/estudiante/:idEstudiante',db.updateEstudiante)
app.delete('/estudiante/:idEstudiante',db.deleteEstudiante)
//carrera
app.post('/carrera',db.createCarrera)
app.get('/carreras',db.getCarreras)
app.put('/carrera/:idCarrera',db.updateCarrera)
app.delete('/carrera/:idCarrera',db.deleteCarrera)
//citas
app.post('/cita',db.createCita)
app.get('/citas',db.getCitas)
app.put('/cita/:idCita',db.updateCita)
app.delete('/cita/:idCita',db.deleteCita)

app.listen(port, function(){ 
  console.log('la app está corriendo en el puerto ${port}')
})