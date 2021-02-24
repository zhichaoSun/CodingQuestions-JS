/*
 * Min Max Stack
 */

class MinMaxStack {

    constructor() {
        this.stack = []
        this.history = []
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    pop() {
        this.history.pop()
        return this.stack.pop()
    }

    push(number) {
        this.stack.push(number)
        const update = { min: number, max:number }

        if(this.history.length) {
            update.min = Math.min(this.history[this.history.length - 1].min, number)
            update.max = Math.max(this.history[this.history.length - 1].max, number)
        }

        this.history.push(update)
    }

    getMin() {
        return this.history[this.history.length - 1].min
    }

    getMax() {
        return this.history[this.history.length - 1].max
    }
}
