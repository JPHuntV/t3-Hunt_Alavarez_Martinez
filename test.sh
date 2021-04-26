#!/bin/bash
#insert tablas

#-curl --data "Nombre=Jean&Apellidos=Hunt Valerio&fechaNacimiento=04-10-2000&Telefono=60155858&correoElectronico=jeanpaulhunt16@gmail.com" http://localhost:4000/estudiante

#-curl --data "Carrera=Ingenieria en computación" http://localhost:4000/Carrera

#curl --data "idEstudiante=3&idCarrera=4&Cita=10-05-2021 15:30&TiempoSesion=00:30:00" http://localhost:4000/cita

#update cita

#curl -X PUT -d "idEstudiante=2" -d "idCarrera=4" -d "Cita=02-10-2022 04:00" -d "TiempoSesion=00:045:00" http://localhost:4000/cita/22

#borrar cita 

#curl -X "DELETE" http://localhost:4000/cita/23

#get info
#curl http://localhost:4000/info/22

