//TODO: arguments that determine input type (default is stdin/out)

const { initCalcReader, startCalcReader } = require("./modules/calcReader")
var { calc, getStack, getLast } = require('./modules/calculator')

const app = () => {
    //TODO: arguments that determine input type (default is stdin/out)
    //TODO: pass arguments into calcReader { input: 'file', output: 'stdout'}
    initCalcReader({
        calc,
        getStack,
        getLast,
    })
    startCalcReader()

}

exports.app = app

