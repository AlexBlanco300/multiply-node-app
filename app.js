const  { crearArchivoTxt } = require('./helpers/multiplicar');

// PROCESO USANDO YARGS
const argv = require('./config/yargs');
require('colors');

console.clear();

// PROCESO SIN YARGS, (MAS "CARPINTERIA")
// const [ , , arg3 ] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log( base );

// PROCESO EN DURO
// const base = 3;

crearArchivoTxt( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( 'archivo:', nombreArchivo.blue, 'creado con éxito.') )
    .catch( err => console.log( err) );
// puedo llamar lo de arriba como Feedback de una promise:)

