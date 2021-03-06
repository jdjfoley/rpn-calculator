const supportedOperators = ['+', '-', '*', '/']
let stack = []

// helpers
// accept 2 numbers and an operator and fulfill the logic
const doMath = (num1f, num2f, operator) => {
    const num1 = parseInt(num1f*10000)
    const num2 = parseInt(num2f*10000)
    if (operator === '+') {
        return (num1 + num2)/10000
    } else if (operator === '-') {
        return (num1 - num2)/10000
    } else if (operator === '*') {
        return (num1 * num2)/100000000
    } else if (operator === '/' && num2 !== 0) {
        return num1 / num2
    }
    return NaN
}

// operator check
const isOperator = (target) => {
    for (let i = 0; i < supportedOperators.length; i++) {
        if (supportedOperators[i] === target) {
            return true
        }
    }
    return false
}

// get last value in stack
const getLast = () => {
    if (stack.length == 0) {
        return "Empty"
    } else {
        return stack[stack.length - 1]
    }
}

const calculateRpn = (input) => {
    const tempStack = [...stack]
    //filter blanks due to split around empty strings
    const cmdAry = input.split(" ").filter(num => num.length > 0)
    let error = false
    for (let i = 0; (i < cmdAry.length && !error); i++) {
        if (isOperator(cmdAry[i])) {
            // if stack < 2 // throw error
            if (tempStack.length >= 2) {
                var num2 = tempStack.pop()
                var num1 = tempStack.pop()
                // do math, then push
                const mathResult = doMath(num1, num2, cmdAry[i])
                if (isNaN(mathResult)) {
                    return {
                        hasError: true,
                        data: stack,
                        message: 'Calculation Not Supported'
                    }
                }
                tempStack.push(mathResult)
            } else {
                return {
                    hasError: true,
                    data: stack,
                    message: 'Not enough digits in stack'
                }
            }
        } else {
            // if not a number, ignore return nan as error
            const c = +cmdAry[i]
            if (isNaN(c)) {
                error = true
            } else {
                tempStack.push(+cmdAry[i])
            }
        }
    }
    if (error) {
        return {
            hasError: true,
            data: stack,
            message: "Contains an invalid character"
        }
    }
    stack = tempStack
    if (tempStack.length == 0) {
        return {
            hasError: false,
            data: stack,
            message: "Empty"
        }
    }
    return {
        hasError: false,
        data: stack
    }
}

const getStack = () => {
    return stack
}

const clearStack = () => {
    stack = []
}

exports.calc = calculateRpn
exports.getStack = getStack
exports.getLast = getLast
exports.clearStack = clearStack