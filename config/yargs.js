let parametros = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
.command('crear', 'Crea un archivo con la tabla de multiplicar', parametros)
.command('listar','Imprime en consola la tabla de multiplicar',parametros)
.help()
.argv

module.exports = {
    argv
}