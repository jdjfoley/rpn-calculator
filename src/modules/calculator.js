const supportedOperators = ['+', '-', '*', '/']
let stack = []

// helpers
// accept 2 numbers and an operator and fulfill the logic
const doMath = (num1, num2, operator) => {
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2
    } else if (operator === '/') {
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

const calculateRpn = (input) => {
    const tempStack = [...stack]
    // if command > 2 after trim // throw error
    const cmdAry = input.split(" ")
    let error = false
    for (let i = 0; (i < cmdAry.length && !error); i++) {
        if (isOperator(cmdAry[i])) {
            // if stack < 2 // throw error
            var num2 = tempStack.pop()
            var num1 = tempStack.pop()
            // do math, then push
            tempStack.push(doMath(num1, num2, cmdAry[i]))
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
        return NaN
    }
    if (tempStack.length == 0) {
        return "Empty"
    }
    stack = tempStack
    return stack[stack.length - 1]
}

const getStack = () => {
    return stack
}

exports.calc = calculateRpn
exports.getStack = getStack