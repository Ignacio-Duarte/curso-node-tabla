const fs = require('fs');
const colors = require('colors')

const creadorTablas = async(base, listar = false, hasta=10) =>{

    try {
        
    
        let salida = '';
    
        for(let i = 1; i <= hasta;  i++  ){
            salida += (`${base} X ${i} = ${base*i}\n`)
        }
        
        if(listar == true){

            console.log('================' .green)
            console.log(`  Tabla del: ${base}`.green )
            console.log('================'.green)

            console.log(salida .cyan)
        }
    
    
        // Con el WriteFileSync necesito un tryCatch para menjar los errores.
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    
        return (`tabla-${base}.txt creado exitosamente`.green.underline)
        
    } catch (err) {
        throw err
    }
}

module.exports = {creadorTablas}