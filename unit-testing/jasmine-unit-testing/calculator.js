function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function (num) { return this.total += num }
Calculator.prototype.sub = function (num) { return this.total -= num }
Calculator.prototype.mul = function (num) { return this.total *= num }
Calculator.prototype.div = function (num) { return this.total /= num }

Object.defineProperty(Calculator.prototype, 'version', {
    get: function () {
        // return "0.2"
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => json.id)

    },
    enumerable: true,
    configurable: true
})