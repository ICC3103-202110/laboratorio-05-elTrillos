const FUNCTIONS = {
    '+': increase,
    '-': decrease
}

function increase(counter){
    return counter + 1
}

function decrease(counter){
    return counter - 1
}

function update(input, model){
    const {counter} = model
    const newCounter = FUNCTIONS[input](counter)
    return {
        ...model,
        counter: newCounter,
        input: input
    }
}

module.exports = {
    update
}