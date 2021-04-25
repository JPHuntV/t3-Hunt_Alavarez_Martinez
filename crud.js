const Pool = require('pg').Pool
const pool = new Pool({
    user: 'jean',
    host:'localhost',
    database: 'estudiantes',
    password: '04102000',
    port: '5432',
})

//crear nuevo estudiante

const createEstudiante = (request, response) => {
    const {Nombre, Apellidos, fechaNacimiento, Telefono, correoElectronico} = request.body

    pool.query('INSERT INTO Estudiante(Nombre, Apellidos, fechaNacimiento,'
    +'Telefono, correoElectronico) VALUES ($1,$2,$3,$4,$5)',
    [Nombre, Apellidos, fechaNacimiento, Telefono, correoElectronico],
    (error, results)=>{
        if(error){
            throw error
        }
    response.status(201).send('El estudiante ha sido agregado y se le asignó el ID: ${result.insertId}')
    })
}

module.exports = {
    createEstudiante
}