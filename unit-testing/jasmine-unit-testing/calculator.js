function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function (num) { return this.total += num }
Calculator.prototype.sub = function (num) { return this.total -= num }
Calculator.prototype.mul = function (num) { return this.total *= num }
Calculator.prototype.div = function (num) { return this.total /= num } 