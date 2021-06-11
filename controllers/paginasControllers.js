import {Empresa} from '../models/Empresas.js'
import {Alumno} from '../models/Alumnos.js'
import tiposPracticas from '../public/tiposPracticas.js'


const paginaInicio = (req, res)=> {
    //res.send('aqui estamos')
    res.render('inicio' )
}

const paginaEmpresas = async (req, res)=> {
    const empresas = await Empresa.findAll()
   // console.log(empresas)
    //empresas.forEach(empresa => console.log(empresa.EMPRESA))
    
    res.render('empresas/listadoempresas', {empresas});
}


const paginaAlumnos = async(req, res)=>{
    const alumnos = await Alumno.findAll()
    //console.log(alumnos)
    //alumnos.forEach(alumno => console.log(alumno.nombreAl))
    res.render('alumnos/listadoalumnos', {
        alumnos
    })
}

const paginaNuevoAlumno = async(req, res)=>{
    
    res.render('alumnos/nuevoAlumno')
}

const paginaNuevaEmpresa = async(req, res)=>{
    
    res.render('empresas/nuevaEmpresa')
}

export {
    paginaInicio,
    paginaEmpresas,
    paginaAlumnos,
    paginaNuevoAlumno,
    paginaNuevaEmpresa

}