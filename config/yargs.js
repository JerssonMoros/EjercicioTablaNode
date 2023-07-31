const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero para generar la abla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'valor para imprimir o no en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta que numero se va a multiplicar'
    })
    .check((argv,options) => {
        console.log(argv.h)

        if(isNaN( argv.b)){
            throw 'La base o el limite tiene que ser un numero'
        }
        if(isNaN( argv.h )  ){
            throw 'La base o el limite tiene que ser un numero'
        }
        if (argv.h < 0){
            throw 'El numero tiene que ser mayor a 0'
        }
        return true
    })
    .argv;

module.exports = argv;