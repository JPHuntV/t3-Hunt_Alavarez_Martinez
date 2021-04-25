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

app.listen(port, function(){ 
  console.log('la app está corriendo en el puerto ${port}')
})