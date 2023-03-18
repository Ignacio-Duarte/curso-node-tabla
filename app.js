const {creadorTablas} = require("./helpers/multiplicar")
const argv = require('./config/yargs')



console.clear()


console.log('base: yargs', argv.base)


creadorTablas(argv.b, argv.l, argv.h)
    .then(nombreDelArchivo => console.log(nombreDelArchivo))
    .catch(err => console.log(err))
