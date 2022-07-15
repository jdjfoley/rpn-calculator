const { exit } = require('process')
var { calc, getStack } = require('../calculator')


const standard = () => {
    // default input
    var readline = require('readline')
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> ',
        terminal: false
    })

    rl.prompt()
    rl.on('line', function (line) {
        if (line === 'q') {
            exit(1)
        } else if (line === 's') {
            console.log(getStack())
        } else {
            const test = calc(line.trim())
            if(isNaN(test)) {
                console.log("Woops! the input provided: ("+line+") contains an invalid character. Stack reverted.")
            }
            console.log(test);    
        }
        rl.prompt()
    })
}

exports.standard = standard