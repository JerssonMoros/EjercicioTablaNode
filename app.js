const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors')

const num = argv.b;
const listar = argv.l
const limite = argv.h

crearArchivo(num, listar, limite)
    .then(data => console.log(data.rainbow, 'creado'))
    .catch(err => console.log(err))

