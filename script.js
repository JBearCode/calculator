const screen = document.getElementById('screen');

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

function add(num1, num2) {
    screen.value = num1 + num2;
}

function subtract(num1, num2) {
    screen.value = num1 - num2;
}

function multiply(num1, num2) {
    screen.value = num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return;
    } else screen.value = num1 / num2;
}

function negate(num) {
    if (num == 0) {
        return;
    } else if (num < 0) {
        screen.value = Math.abs(num);
    } else if (num > 0) {
        screen.value = -Math.abs(num);
    }
}

function square(num) {
	screen.value = num * num;
}

function root(num) {
    if (num < 0) {
        return;
    } else screen.value = Math.sqrt(num);
}

