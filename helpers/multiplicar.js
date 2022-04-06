const fs = require('fs');
const colors = require('colors');

const crearArchivoTxt = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++ ) {
            salida  += `${ base } x ${ i } = ${ base * i }\n`;
            consola = consola + `${ base } ${'x'.blue} ${ i } = ${ base * i }\n`;
        }

        if( listar ) {
            console.log('============='.blue);
            console.log(' TABLA DEL:', base);
            console.log('============='.blue);
            
            console.log( consola );
        }

        fs.writeFileSync( `./salidas/tabla-del-${ base }.txt`, salida );

        return `tabla-del-${ base }.txt`;


    } catch (err) {
        
        throw err;
        
    }

}

module.exports = {
    crearArchivoTxt: crearArchivoTxt
}