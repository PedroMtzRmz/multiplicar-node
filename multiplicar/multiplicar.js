const fs = require('fs');
const colors = require('colors')

let listarTabla = (base,limite = 10) => {
    if(!isNaN(base) && !isNaN(limite)){                
        let i

        console.log(`===== Tabla del ${base} =====`.green);
        for (i = 1; i <= limite; i++) {
            console.log(`${base} X ${i} = ${base*i}`);
        }
    }else{        
        console.log(`Alguno de los parametros no es un número`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        
        if(isNaN(base) || isNaN(limite))
            reject(`Uno de los parámetros no es un numero`)
        else{
            let i
            let data = ''
            
            for (i = 1; i <= limite; i++) {
                data += `${base} X ${i} = ${base * i}\n`
            }
            
            fs.writeFile(`./tablas/tabla-${base}.txt`, data , (err) => {
                if (err) reject(err);
                else resolve(`tabla-${base}.txt`);
            });
        }
    })
}

/* fs.writeFile(file, data[, options], callback) */
module.exports = {
    listarTabla,
    crearArchivo
}