const {calc, getStack, getLast, clearStack} = require('./calculator')
beforeEach(() => {
    clearStack()
})

test('Eval 1 2 + equals 3', () => {
    expect(calc('1 2 +').data[0]).toBe(3)
})

test('Eval 10 1000 - equals -990', () => {
    expect(calc('10 1000 -').data[0]).toBe(-990)
})

test('Eval .5 4 * equals 2', () => {
    expect(calc('0.5 4 *').data[0]).toBe(2)
})

test('Eval 999 6 / equals 166.5', () => {
    expect(calc('999 6 /').data[0]).toBe(166.5)
})

test('Eval 5 5 5 8 + + - equals -13', () => {
    expect(calc('5 5 5 8 + + -').data[0]).toBe(-13)
})

test('Eval multi line 4 4 3 + then 1 2 * - then *', () => {
    calc('4 4 3 +')
    calc('1 2 * -')
    const finalresponse = calc('*')
    expect(finalresponse.data[0]).toBe(20)
})

test('Has Error 12 3 %', () => {
    expect(calc('12 3 %').hasError).toBe(true)
})

test('Has Error 1 2 + +', () => {
    expect(calc('1 2 + +').hasError).toBe(true)
})

test('Has Error 1 2 a +', () => {
    expect(calc('1 2 + +').hasError).toBe(true)
})

test('Get Last', () => {
    calc('1 2 3 4 5')
    expect(getLast()).toBe(5)
})

test('Get Stack', () => {
    calc('1 2 4 5')
    expect(getStack()).toStrictEqual([1,2,4,5])
})

test('Ignore extra spaces', () => {
    expect(calc('1    2 3  4 5 * *   * +').data[0]).toBe(121)
})