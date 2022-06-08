function calculate(inputValue) {

    let expresson = /\+|\-|\*|\//;
    let numbers = inputValue.split(expresson);
    let number1 = parseInt(numbers[0]);
    let number2 = parseInt(numbers[1]);
    let operation = inputValue.match(expresson) ? inputValue.match(expresson)[0] : "";
    let cal = new Calculator();
    this.result = 0;

    if (Number.isNaN(number1) || Number.isNaN(number2)) {
        updateResult("Invalid Expression");
        return;
    }

    cal.add(number1)


    switch (operation) {

        case "+":
            {
                this.result = cal.add(number2);
                break;
            }
        case "-":
            {
                this.result = cal.sub(number2);
                break;

            }
        case "*":
            {
                this.result = cal.mul(number2);
                break;
            }
        case "/":
            {
                this.result = cal.div(number2);
                break;
            }
        default:
            {
                result = "Invalid Expression";
                break;
            }


    }
    updateResult(this.result);

}

function updateResult(res) {
    debugger
    if (document.getElementsByClassName("result").length > 0)
        document.getElementsByClassName("result")[0].innerHTML = res;
}

function showVersion() {
    const calculator = new Calculator();
    if (document.getElementById("version")) {
        debugger
        calculator.version.then((ver) => {
            document.getElementById("version").innerHTML = ver;
        });
    }
}

