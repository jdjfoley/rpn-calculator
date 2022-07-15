const { exit } = require('process')

const standard = (calculator) => {

    // move to config file at some point
    // or use logger library instead of print
    const printDebug = false 
    const print = (message, isDebug) => {
        if (isDebug && printDebug) {
            console.log(`[Debug-Standard] ${message}`)
        } else if (!isDebug) {
            console.log(`${message}`)
        }
    }

    // default input
    var readline = require('readline')
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> ',
        terminal: false
    })
    print(`calc: ${calculator.calc != null}`, true)
    print(`getLast: ${calculator.getLast != null}`, true)
    rl.prompt()
    rl.on('line', function (line) {
        print(`input line: "${line}"`, true)
        if (!calculator.calc || !calculator.getLast) {
            print("Invalid calculator: Missing calc() or getLast() function")
            exit(1)
        } else if (line === 'q') {
            exit(1)
        } else if (line === 's' && calculator.getStack) {
            print(calculator.getStack())
        } else {
            const result = calculator.calc(line.trim())
            if (result.hasError) {
                print(`Woops! "${line}": ${result.message}. Stack reverted.`)
            }
            print(calculator.getLast());
        }
        rl.prompt()
    })
}

exports.standard = standard