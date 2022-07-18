var rl;
var myCalculator;

// move to config file at some point
// or use logger library instead of print
const printDebug = false

const print = (message, isDebug) => {
    if (isDebug && printDebug) {
        console.log(`[Debug-MyCalculator] ${message}`)
    } else if (!isDebug) {
        console.log(`${message}`)
    }
}

// input types to be added as parameter
const init = (calculator) => {
    myCalculator = calculator
    // default input
    var readline = require('readline')
    rl = readline.createInterface({
        input: process.stdin,// future configurable
        output: process.stdout, // future configurable
        prompt: '> ',
        terminal: false
    })
    // debugger logs
    print(`calc: ${myCalculator.calc != null}`, true)
    print(`getLast: ${myCalculator.getLast != null}`, true)
}

const start = () => {
    // initial prompt
    rl.prompt()
    rl.on('line', (line) => {

        //debugger log
        if (myCalculator.getStack instanceof Function) {
            print(`stack before: "${myCalculator.getStack()}"`, true)
        }
        print(`input line: "${line}"`, true)

        if (!myCalculator.calc || !myCalculator.getLast) {
            print("Invalid calculator: Missing calc() or getLast() function")
            throw new Error("Invalid calculator: Missing calc() or getLast() function")
        } else if (line === 'q') {
            rl.close()
            return
        } else if (line === 's' && (myCalculator.getStack instanceof Function)) {
            // if getStack is not defined, treat s as a NaN
            const st = myCalculator.getStack()
            print(st.length == 0 ? "Empty" : `${st}`)
        } else {
            const result = myCalculator.calc(line.trim())
            if (result.hasError) {
                print(`Woops! "${line}": ${result.message}. Stack reverted.`)
            }
            print(myCalculator.getLast());
        }
        //debugger log
        if (myCalculator.getStack instanceof Function) {
            print(`stack after: "${myCalculator.getStack()}"`, true)
        }
        rl.prompt()
    })
        .on('close', () => {
            // eof found
            process.exit()
        })

}

const provideInput = (input) => {
    rl.write(input)
}

const close = () => {
    rl.close()
}
exports.initCalcReader = init
exports.startCalcReader = start
exports.provideInputToCalcReader = provideInput
exports.closeReader = close