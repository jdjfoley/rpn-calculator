//TODO: arguments that determine input type (default is stdin/out)

const { standard } = require("./modules/input/standard")
var { calc, getStack, getLast } = require('./modules/calculator')

const app = () => {
    //TODO: arguments that determine input type (default is stdin/out)
    standard({
        calc,
        getStack,
        getLast,
    })
}

exports.app = app

