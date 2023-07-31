const fs = require('fs');
const colors = require('colors')

const generarTabla = (num, limite, listar) => {

    let txt = '';
    let consola = '';

    for (let i=0; i<= limite;i++) {
        consola += `${colors.red(num)} ${'x'.blue} ${colors.yellow(i)} ${'='.grey} ${colors.green(num*i)}\n`;
        txt += `${num} 'x' ${i} '=' ${num*i}\n`;
    }
    if (listar) {
        console.log(consola)
    }
    
    return txt;
}

const crearArchivo = async (num, listar, limite) => {
    try {
        const data = await generarTabla(num, limite, listar)

        fs.writeFileSync( `./Salida/tablaDel${num}.txt` , data )
        return `tablaDel${num}.txt`
    } catch (error) {
        throw error
    }
    
    
}
module.exports = {
    crearArchivo
}