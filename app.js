const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();

//Asi se ponian parametros sin yargs.
// const [, , arg3 = 'base=5'] = process.argv
// const [, base] = arg3.split('=');
// console.log(process.argv);


crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' creado'))
  .catch(err => console.error(err));
