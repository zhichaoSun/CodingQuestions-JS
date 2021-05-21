Array.prototype.peek = function() { return this[this.length - 1] }
Array.prototype.isEmpty = function() { return this.length === 0 }

function sortStack(stack) {
    console.log(stack)
    if(stack.isEmpty()) return stack

    const top = stack.pop()

    sortStack(stack)
    insertStack(stack, top)
    return stack
}

function insertStack(stack, value) {
    console.log(stack)
    if(stack.isEmpty() || value >= stack.peek()) {
        stack.push(value)
        return
    }
    const top = stack.pop()
    insertStack(stack, value)
    stack.push(top)
}

console.log(sortStack([1,2,3,4,5,6]))