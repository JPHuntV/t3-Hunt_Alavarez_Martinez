const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./crud')





app.use(bodyParser.json())
app.use(
  bodyParser.urIencoded({
    extended: true,
  })
)

app.get('/', function (request, response){
  response.json({info: 'prueba de servidor'})
})

app.post('/Estudiante',db.createEstudiante)

app.listen(port, function(){ 
  console.log('la app está corriendo en el puerto ${port}')
})