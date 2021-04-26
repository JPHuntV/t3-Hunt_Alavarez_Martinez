#!/bin/bash
#insert tablas

#curl --data "Nombre=Jose Francisco&Apellidos=Cisneros Mora&fechaNacimiento=19-08-1989&Telefono=82453225&correoElectronico=josisra@gmail.com" http://localhost:4000/estudiante
#curl --data "Nombre=Alex Josue&Apellidos=Rodriguez Solis&fechaNacimiento=13-10-1992&Telefono=84652156&correoElectronico=aljosu@hotmail.com" http://localhost:4000/estudiante
curl --data "Nombre=Sara&Apellidos=Chacón Durán&fechaNacimiento=05-01-2000&Telefono=65658456&correoElectronico=saradu@gmail.com" http://localhost:4000/estudiante

#curl --data "Carrera=Ingenieria en computación" http://localhost:4000/Carrera
#curl --data "Carrera=Ingenieria en industrial" http://localhost:4000/Carrera
#curl --data "Carrera=Educación matemática" http://localhost:4000/Carrera
curl --data "Carrera=Producción industrial" http://localhost:4000/Carrera

#curl --data "idEstudiante=3&idCarrera=4&Cita=10-06-2021 16:00&TiempoSesion=00:30:00" http://localhost:4000/cita
#curl --data "idEstudiante=4&idCarrera=5&Cita=10-05-2021 16:30&TiempoSesion=00:30:00" http://localhost:4000/cita
#curl --data "idEstudiante=5&idCarrera=6&Cita=11-05-2021 15:00&TiempoSesion=00:30:00" http://localhost:4000/cita
curl --data "idEstudiante=6&idCarrera=5&Cita=11-05-2021 15:30&TiempoSesion=00:30:00" http://localhost:4000/cita

#update cita

curl -X PUT -d "idEstudiante=4" -d "idCarrera=4" -d "Cita=11-05-2021 17:00" -d "TiempoSesion=00:045:00" http://localhost:4000/cita/22

#borrar cita 

curl -X "DELETE" http://localhost:4000/cita/26

#get info
curl http://localhost:4000/info/24


