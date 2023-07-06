class Context {
    constructor() {
        this.strategy = null;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.strategy.execute(a, b);
    }
}

class ConcreteStrategyAdd {
    execute(a, b) {
        return a + b;
    }
}

class ConcreteStrategySubtract {
    execute(a, b) {
        return a - b;
    }
}

class ConcreteStrategyMultiply {
    execute(a, b) {
        return a * b;
    }
}

// Przykładowa aplikacja
async function main() {
    const context = new Context();
    const firstNumber = parseInt(await prompt('First number: '), 10);
    const secondNumber = parseInt(await prompt('Second number: '), 10);
    const action = await prompt('Action (addition, subtraction, multiplication): ');

    if (action === 'addition') {
        context.setStrategy(new ConcreteStrategyAdd());
    } else if (action === 'subtraction') {
        context.setStrategy(new ConcreteStrategySubtract());
    } else if (action === 'multiplication') {
        context.setStrategy(new ConcreteStrategyMultiply());
    }

    const result = context.executeStrategy(firstNumber, secondNumber);
    console.log('Result: ', result);
}

main();
