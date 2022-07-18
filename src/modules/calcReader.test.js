const { initCalcReader, startCalcReader, provideInputToCalcReader, closeReader } = require("./calcReader")
var { calc, getStack, getLast } = require('./calculator')
let mockExit
let mockLog

beforeAll(() => {
    mockExit = jest.spyOn(process, 'exit').mockImplementation(() => { })
    mockLog = jest.spyOn(console, 'log')
        .mockImplementation(() => { }); //comment this to see the logs instead
})

afterEach(() => {
    //ensure no readers are left accidently listening
    closeReader()
})

test('reader getLast in stack of [10, 20, 30]', () => {
    initCalcReader({
        calc,
        getStack,
        getLast,
    })
    startCalcReader()
    provideInputToCalcReader("10 20 30\n")
    expect(getLast()).toBe(30)
    closeReader()
})

test('reader input q and exit', () => {
    initCalcReader({
        calc,
        getStack,
        getLast,
    })
    startCalcReader()
    provideInputToCalcReader("q\n")
    expect(mockExit).toHaveBeenCalled()
})

test('reader input s with no getStack', () => {
    initCalcReader({
        calc,
        getLast,
    })
    startCalcReader()
    provideInputToCalcReader("1 2\n")
    provideInputToCalcReader("s\n")
    expect(mockLog).toHaveBeenCalledWith('Woops! "s": Contains an invalid character. Stack reverted.')
    provideInputToCalcReader("q\n")
})

test('reader returns last number in stack 1 2 + 2 3 => 3', () => {
    initCalcReader({
        calc,
        getStack,
        getLast,
    })
    startCalcReader()
    provideInputToCalcReader("1 2 + 2 3\n")
    expect(mockLog).toHaveBeenCalledWith('3')
    provideInputToCalcReader("q\n")
})