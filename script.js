// import JS math functions from earlier exercise I did

function add (num1, num2) {
	return parseInt(num1, 10) + parseInt(num2, 10);
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (input) {
	let total = 0;
	if (toString.call(input) !== "[object Array]") {
		return total;
	}

	for (let i = 0; i < input.length; i++) {
		if(isNaN(input[i])) {
			continue;
		}
		total += Number(input[i]);
	}
	return total;
}

function multiply (input) {
	let total = 0;
	if (toString.call(input) !== "[object Array]") {
		return total;
	}
	total = 1;
	for (let i = 0; i < input.length; i++) {
		if(isNaN(input[i])) {
			continue;
		}
		total *= Number(input[i]);
	}
	return total;
}

function power(num, exp) {
	return num ** exp;
}

function factorial(num) {
	if (num == 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}