const Pool = require('pg').Pool
const pool = new Pool({
    user: 'jean',
    host:'localhost',
    database: 'estudiantes',
    password: '04102000',
    port: '5432',
})


//crear nuevo estudiante

const createEstudiante = function(request, response){
    const {Nombre, Apellidos, fechaNacimiento, Telefono, correoElectronico} = request.body

    pool.query('INSERT INTO Estudiante(Nombre, Apellidos, fechaNacimiento,'
    +'Telefono, correoElectronico) VALUES ($1,$2,$3,$4,$5)',
    [Nombre, Apellidos, fechaNacimiento, Telefono, correoElectronico],
    function(error, results){
        if(error){
            throw error
        }
    response.status(201).send('El estudiante ha sido agregado y se le asignó el ID: {result.insertId}')
    })
}

//get estudiante
const getEstudiantes = function(request, response){
    pool.query('SELECT * FROM estudiante ORDER BY idEstudiante ASC',
    function(error, results){
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//update estudiante
const updateEstudiante = function(request,response){
    const idEstudiante = parseInt(request.params.idEstudiante)
    const  {Nombre/*, Apellidos, fechaNacimiento, Telefono, correoElectronico*/} = request.body
    pool.query('UPDATE estudiante set Nombre =$2 where idEstudiante = $1',
    [idEstudiante,Nombre],
    function(error, results){
        if (error){
           throw error 
        }
        response.status(200).send('usuario actualizado')
    })
}

const deleteEstudiante = function(request, response){
    const idEstudiante = parseInt(request.params.idEstudiante)
    pool.query('DELETE FROM estudiante WHERE idEstudiante = $1',
    [idEstudiante],
    function(error, results){
        if(error){
            throw error
        }
        response.status(200).send('se ha eliminado el estudiante')
    })
}

//crear carrera
const createCarrera = function(request, response){
    const {Carrera} = request.body

    pool.query('INSERT INTO Carrera(Carrera) VALUES ($1)',
    [Carrera],
    function(error, results){
        if(error){
            throw error
        }
    response.status(201).send('La carrera ha sido agregado y se le asignó el ID: ${result.insertId}')
    })
}
 //getCarreras
 const getCarreras = function(request, response){
    pool.query('SELECT * FROM carrera ORDER BY idCarrera ASC',
    function(error, results){
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//updateCarrera
const updateCarrera = function(request,response){
    const idCarrera = parseInt(request.params.idCarrera)
    const  {Carrera} = request.body
    pool.query('UPDATE carrera set Carrera =$2 where idCarrera = $1',
    [idCarrera,Carrera],
    function(error, results){
        if (error){
           throw error 
        }
        response.status(200).send('carrera actualizada')
    })
}

const deleteCarrera = function(request, response){
    const idCarrera = parseInt(request.params.idCarrera)
    pool.query('DELETE FROM carrera WHERE idCarrera = $1',
    [idCarrera],
    function(error, results){
        if(error){
            throw error
        }
        response.status(200).send('se ha eliminado la carrera')
    })
}

const createCita = function(request, response){
    const {idEstudiante,idCarrera, Cita, TiempoSesion} = request.body

    pool.query('INSERT INTO CitaMatricula(idEstudiante,idCarrera, Cita, TiempoSesion)'+
    'VALUES ($1,$2,$3,$4)',
    [idEstudiante,idCarrera, Cita, TiempoSesion],
    function(error, results){
        if(error){
            if(error.message == 'insert or update on table "citamatricula" violates foreign key constraint "fk_estudiante"'){
                response.status(500).send('El estudiante no está registrado en la base de datos')  
            }
            if(error.message == 'insert or update on table "citamatricula" violates foreign key constraint "fk_carrera"'){
                response.status(500).send('la carrera no está registrada en la base de datos')  
            }
            console.log(error.message)
        }else{
            response.status(201).send('La cita ha sido agregado y se le asignó el ID: ${result.insertId}')
        }
    })
}

const getCitas = function(request, response){
    pool.query('SELECT * FROM CitaMatricula ORDER BY idCita ASC',
    function(error, results){
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateCita = function(request,response){
    const idCita = parseInt(request.params.idCita)
    const  {idEstudiante,idCarrera,Cita,TiempoSesion} = request.body
    pool.query('UPDATE CitaMatricula set idEstudiante=$2, idCarrera=$3, Cita=$4, TiempoSesion=$5 where idCita = $1',
    [idCita,idEstudiante,idCarrera,Cita,TiempoSesion],
    function(error, results){
        if(error){
            response.status(500).send(error.message)
        }else{
            response.status(200).send('cita actualizada')
        }
    })
}

const deleteCita = function(request, response){
    const idCita = parseInt(request.params.idCita)
    pool.query('DELETE FROM CitaMatricula WHERE idCita = $1',
    [idCita],
    function(error, results){
        if(error){
            throw error
        }
        response.status(200).send('se ha eliminado la cita de matricula')
    })
}
module.exports = {
    getEstudiantes,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante,
    //carrera
    createCarrera,
    getCarreras,
    updateCarrera,
    deleteCarrera,
    createCita,
    getCitas,
    updateCita,
    deleteCita,
}

/*
CURL --data "Nombre='a'&Apellidos='b'&fechaNacimiento='04-10-2000'&Telefono=12345678&correoElectronico='correo@gmail.com'" http://localhost:4000/estudiante
*/