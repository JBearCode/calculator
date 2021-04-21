const screen = document.getElementById('screen');

function operate(operator, num1, num2) {
    let newDisplayValue = operator(num1, num2);
    screen.value = newDisplayValue;
}

function add(num1, num2) {
	return parseInt(num1, 10) + parseInt(num2, 10);
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        return;
    } else return num1 / num2;
}

function negate(num) {
    if (num == 0) {
        return;
    } else if (num < 0) {
        return Math.abs(num);
    } else if (num > 0) {
        return -Math.abs(num);
    }
}

function square(num) {
	return num * num;
}

function root(num) {
    if (num < 0) {
        return;
    } else return Math.sqrt(num);
}

