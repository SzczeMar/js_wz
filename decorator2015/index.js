class StackCalculator{
    constructor(){
        this.stack = []
    }
    putValue(value){
        this.stack.push(value)
    }
    getValue(){
        return this.stack.pop()
    }
    peekValue(){
        return this.stack[this.stack.length - 1]
}

clear () {
    this.stack = []
}

divide () {
    const divisor = this.getValue()
    const dividend = this.getValue()
    const quotient = dividend / divisor
    this.putValue(quotient)
    return quotient
}

multiply () {
    const multiplicand = this.getValue()
    const multiplier = this.getValue()
    const result = multiplier * multiplicand
    this.putValue(result)
    return result
}
}

const enhancedCalculatorHandler = {
    get (target, property) {
        if (property == 'add'){
            return function () {
                const summand2 = target.getValue()
                const summand1 = target.getValue()
                const sum = summand1 + summand2
                target.putValue(sum)
                return sum
            }
        } else if (property == 'divide') {
            return function () {
                const divisor = target.peekValue()
                if (divisor === 0) {
                    throw Error('Division by 0')
                }
                return target.divide()
            }
        }
        return target[property]
}
}

const calculator = new StackCalculator()
const enhancedCalculator = new Proxy(calculator, enhancedCalculatorHandler)

console.log(enhancedCalculator instanceof StackCalculator)
enhancedCalculator.putValue(4)
enhancedCalculator.putValue(3)
console.log(enhancedCalculator.add())
enhancedCalculator.putValue(2)
console.log(enhancedCalculator.multiply())
// enhancedCalculator.putValue(0)
// console.log(enhancedCalculator.divide())