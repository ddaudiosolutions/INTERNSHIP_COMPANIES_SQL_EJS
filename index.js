import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import ejs from 'ejs';
import ejsMate from 'ejs-mate';

const app = express()

db.authenticate()
    .then (()=> console.log('Base de datos Conectada'))
    .catch (error => console.log(error))

    
const port = process.env.PORT || 4000;



// AGREGAR BODYPARSER PARA LEER LOS DATOS DEL FORMULARIO
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));//DEBE IR SIEMPRE ANTES DEL ROUTER

app.use('/', router);


app.listen(port, ()=> {
    console.log(`Console Running on ${port}`)
})