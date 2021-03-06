describe("main.js", function () {


    describe("Calculate -  functional validation", function () {
        it("calculate() add Validation", function () {
            let cal = new calculate("56+5");
            expect(61).toBe(cal.result);
        })
        it("calls -  add spyOn prototype", function () {
            let spy = spyOn(Calculator.prototype, "add")
            calculate("3+4")
            expect(spy).toHaveBeenCalledTimes(2)
            expect(spy).toHaveBeenCalledWith(4)
            expect(spy).toHaveBeenCalledWith(3)
        })
        it("calls -  sub spyOn prototype", function () {
            let spy = spyOn(Calculator.prototype, "sub")
            calculate("4-4")
            expect(spy).toHaveBeenCalledTimes(1)
            expect(spy).toHaveBeenCalledWith(4)
        })
        it("calls -  mul spyOn prototype", function () {
            let spy = spyOn(Calculator.prototype, "mul")
            calculate("3*4")
            expect(spy).toHaveBeenCalledTimes(1)
            expect(spy).toHaveBeenCalledWith(4)
        })
        it("calls -  div spyOn prototype", function () {
            let spy = spyOn(Calculator.prototype, "div")
            calculate("4/2")
            expect(spy).toHaveBeenCalledTimes(1)
            expect(spy).toHaveBeenCalledWith(2)
        })
        it("calls -  call through", function () {
            spyOn(window, 'updateResult')
            let spy = spyOn(Calculator.prototype, "div").and.callThrough();
            calculate("4/2")
            expect(spy).toHaveBeenCalledTimes(1)
            expect(window.updateResult).toHaveBeenCalledWith(2)
        })

        it("calls -  returnValue", function () {
            spyOn(window, 'updateResult')
            let spy = spyOn(Calculator.prototype, "div").and.returnValue("Custom value");
            calculate("4/2")
            expect(spy).toHaveBeenCalledTimes(1)
            expect(window.updateResult).toHaveBeenCalledWith("Custom value")
        })

        it("calls - examples using  returnValue", function () {
            spyOn(window, 'updateResult')
            let spy = spyOn(Calculator.prototype, "div").and.returnValue("Custom value");
            calculate("4/2")
            expect(spy).toHaveBeenCalledTimes(1)
            expect(window.updateResult).toHaveBeenCalledWith("Custom value")
        })
        it("calls - examples using  returnValues", function () {
            spyOn(window, 'updateResult')
            let spy = spyOn(Calculator.prototype, "div").and.returnValues("Custom value1", "Custom value2");
            calculate("4/2")
            calculate("4/4")
            expect(spy).toHaveBeenCalledTimes(2)
            expect(window.updateResult).toHaveBeenCalledWith("Custom value1")
            expect(window.updateResult).toHaveBeenCalledWith("Custom value2")
        })

    })

    describe("UI element validation - beforeEach, afterEach", function () {
        beforeEach(function () {
            let element = document.createElement("div")
            element.setAttribute("class", "result");
            document.body.appendChild(element);
        })
        afterEach(function () {
            let element = document.getElementsByClassName("result")[0];
            document.body.removeChild(element);
        })
        it("SpyOn & haveBeenCalled  ", function () {
            spyOn(window, 'updateResult');
            let cal = new calculate("560");
            // expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("Invalid Expression");
            // let UIValue = document.getElementsByClassName("result")[0].textContent;
            // expect(parseInt(UIValue)).toBe(cal.result);

        })
        it("SpyOn & haveBeenCalledTimes  ", function () {
            spyOn(window, 'updateResult').and.stub();
            calculate("5+60");
            calculate("5+60");
            expect(window.updateResult).toHaveBeenCalledTimes(2);
            // let UIValue = document.getElementsByClassName("result")[0].textContent;
            // expect(parseInt(UIValue)).toBe(cal.result);
        })
    })

    describe("UI element validation - beforeAll, afterAll", function () {
        beforeAll(function () {

            element = document.createElement("div")
            element.setAttribute("class", "result");
            this.element = element;
            document.body.appendChild(element);
        })
        afterAll(function () {
            // let element = document.getElementsByClassName("result")[0];
            document.body.removeChild(this.element);
        })
        it("update() - Add", function () {
            let cal = new calculate("5+60");
            let UIValue = document.getElementsByClassName("result")[0].textContent;
            expect(parseInt(UIValue)).toBe(cal.result);
        })
        it("update() - Sub", function () {
            let cal = new calculate("60-60");
            let UIValue = document.getElementsByClassName("result")[0].textContent;
            expect(parseInt(UIValue)).toBe(cal.result);
        })
        it("update() - Mul", function () {
            let cal = new calculate("6*6");
            let UIValue = document.getElementsByClassName("result")[0].textContent;
            expect(parseInt(UIValue)).toBe(cal.result);
        })
    })

    describe("Showversion()", function () {

        it("fetches info from external Call", function (done) {
            let calculator = new Calculator();
            calculator.version.then(function (args) {
                expect(args).toBe(1);
                done();
            })
        })
        it("fetches info from external Call", function (done) {
            let calculator = new Calculator();
            calculator.version.then(function (args) {
                expect(args).toBe(1);
                done();
            })
        })
        it("async & await fetches info from external Call", async function () {
            let calculator = new Calculator();
            spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response('{"id":1}')))
            let version = await calculator.version;
            expect(version).toBe(1);
        })
        it(" spyOn - fetches info from external Call", function (done) {
            let calculator = new Calculator();
            spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response('{"id":1}')))
            calculator.version.then(function (version) {
                expect(version).toBe(1);
                done();
            })
        })

    })

})
