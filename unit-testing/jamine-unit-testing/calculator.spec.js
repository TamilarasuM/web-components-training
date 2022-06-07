describe("Calculator.js", function () {

    it("should add", function () {
        let cal = new Calculator();
        let result = cal.add(4)
        expect(result).toBe(4)
    })
    it("should Sub", function () {
        let cal = new Calculator();
        let result = cal.sub(4)
        expect(result).toBe(-4)
    })
    it("should Multiply", function () {

        expect("1").toBe("2")
    })
})