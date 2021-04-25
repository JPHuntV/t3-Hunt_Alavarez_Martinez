CREATE TABLE Estudiante
(
    idEstudiante SERIAL PRIMARY KEY,
    Nombre VARCHAR(25) NOT NULL,
    Apellidos VARCHAR(50) NOT NULL,
    fechaNacimiento DATE NOT NULL,
    Telefono INT NOT NULL,
    correoElectronico VARCHAR(50) NOT NULL
);

CREATE TABLE Carrera
(
    idCarrera SERIAL PRIMARY KEY,
    Carrera VARCHAR(30) NOT NULL
);

CREATE TABLE CitaMatricula
(
    idCita SERIAL PRIMARY KEY,
    idEstudiante SERIAL,
    idCarrera SERIAL,
    Cita TIMESTAMP NOT NULL,
    TiempoSesión TIME NOT NULL,
    CONSTRAINT fk_estudiante FOREIGN KEY(idEstudiante)
    REFERENCES Estudiante(idEstudiante),
    CONSTRAINT fk_carrera FOREIGN KEY(idCarrera)
    REFERENCES Carrera(idCarrera) 
);