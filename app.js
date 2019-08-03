const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
const {argv} = require('./config/yargs')
const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'listar': 
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${colors.green(archivo)} creado`))
            .catch(err => console.log(`Archivo ${archivo} NO creado`.red))
        console.log(argv.base);
        break;
    default:
        console.log(comando);
}


// let base = '10';

// console.log(argv.limite);

// let parametro = argv[2]
// let base = parametro.split('=')[1]

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo ${archivo} creado`))
//     .catch(err => console.log('Archivo no creado: '+err))