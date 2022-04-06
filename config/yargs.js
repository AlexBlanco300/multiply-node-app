const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type : 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type : 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type : 'number',
                    describe: 'Determina hasta que numero se extendera la multiplicación',
                    default: 10
                })
                .check( (argv, options ) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número'
                    }
                        return true;
                })
                .argv;

module.exports = argv;