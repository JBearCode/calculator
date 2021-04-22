const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

function updateDisplay() {
    const display = document.getElementById('screen');
    display.value = calculator.displayValue;
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

const keys = document.querySelector('.key-div');

keys.addEventListener('click', (event) => {
    const { target } = event;
  
    if (!target.matches('button')) {
      return;
    }
  
    if (target.classList.contains('immediate-operator')) {
      console.log('immediate-operator', target.value);
      respondToOperator(target.value);
      updateDisplay();
      return;
    }

    if (target.classList.contains('delayed-operator')) {
        respondToOperator(target.value);
        updateDisplay();
        console.log('delayed-operator', target.value);
        return;
      }
  
    if (target.classList.contains('decimal')) {
      inputDot(target.value);
      updateDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) {
      console.log('clear', target.value);
      return;
    }
  
    inputNumber(target.value);
    updateDisplay();
  });

  function inputNumber(num) {
      const { displayValue, waitingForSecondOperand } = calculator;

      if (waitingForSecondOperand === true) {
        calculator.displayValue = num;
        calculator.waitingForSecondOperand = false;
      } else {
        calculator.displayValue = displayValue === '0' ? num : displayValue + num;
      }
    
      console.log(calculator);
    }

  function inputDot(dot) {
      if (!calculator.displayValue.includes(dot)) {
          calculator.displayValue += dot;
      }
  }

  function respondToOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const finalCalculation = calculate(firstOperand, inputValue, operator);

      calculator.displayValue = String(finalCalculation);
      calculator.firstOperand = finalCalculation;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }

  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '−') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }