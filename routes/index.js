import express from 'express';

import {
        paginaInicio, 
        paginaEmpresas, 
        paginaAlumnos, 
        paginaNuevoAlumno,
        paginaNuevaEmpresa
    } from '../controllers/paginasControllers.js'

import {
        guardarNuevoAlumno
    } from '../controllers/nuevoAlumnoControllers.js'

import { 
        guardarNuevaEmpresa 
    } from '../controllers/nuevaEmpresaControllers.js';

const router = express.Router();

router.get('/', paginaInicio );

router.get('/alumnos/nuevoalumno', paginaNuevoAlumno);

router.post('/alumnos/nuevoalumno', guardarNuevoAlumno);

router.get('/empresas/nuevaempresa', paginaNuevaEmpresa);

router.post('/empresas/nuevaempresa', guardarNuevaEmpresa)

router.get('/empresas/listadoempresas', paginaEmpresas);

router.get('/alumnos/listadoalumnos', paginaAlumnos);



export default router