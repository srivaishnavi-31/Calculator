let display = document.getElementById("display");

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    if (display.value !== "" && !isNaN(display.value.slice(-1))) {
        display.value += op;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
