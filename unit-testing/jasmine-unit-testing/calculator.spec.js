describe("Calculator.js", function () {

    it("should add number to total", function () {
        let cal = new Calculator();
        let result = cal.add(4)
        expect(result).toBe(4)
    })
    it("should minus number to total", function () {
        let cal = new Calculator();
        let result = cal.sub(4)
        expect(result).toBe(-4)
    })
    xit("should Multiply number to total", function () {
        let cal = new Calculator();
        let result = cal.mul(4)
        expect(result).toBe(0)
    })


    it("should test matcher - toEqual", function () {
        let cal = new Calculator();
        let result = cal.add(4)
        expect(result).toEqual(4)
    })

    it("should test matcher- toBeTruthy", function () {
        let cal = new Calculator();
        let result = cal.add(4) == 4;
        expect(result).toBeTruthy()
    })

    it("should test matcher- not toBeTruthy", function () {
        let cal = new Calculator();
        let result = cal.add(4) == 5;
        expect(result).not.toBeTruthy()
    })

    it("should test matcher- Contain matcher", function () {
        expect(Calculator.constructor.name).toContain("Fun")
    })
})


describe("Calculator.js organization (beforeEach, afterEach)", function () {

    let cal;
    beforeEach(function () {
        cal = new Calculator
    })
    afterEach(function () {
        cal = null;
    })
    it("should test - toEqual", function () {
        // let cal = new Calculator();
        let result = cal.add(4)
        expect(result).toEqual(4)
    })

    it("should test - toBeTruthy", function () {
        // let cal = new Calculator();
        let result = cal.add(4) == 4;
        expect(result).toBeTruthy()
    })

    it("should test - not toBeTruthy", function () {
        // let cal = new Calculator();
        let result = cal.add(4) == 5;
        expect(result).not.toBeTruthy()
    })

    it("should test - Contain matcher", function () {
        expect(Calculator.constructor.name).toContain("Fun")
    })

})