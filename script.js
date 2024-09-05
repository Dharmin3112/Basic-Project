const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentOperation = '';
let previousOperation = '';

document.addEventListener('keydown', (event) => {
    const keyValue = event.key;
    if (keyValue >= 0 && keyValue <= 9) {
        appendToDisplay(keyValue);
    } else if (keyValue === '+') {
        performOperation('+');
    } else if (keyValue === '-') {
        performOperation('-');
    } else if (keyValue === '*') {
        performOperation('*');
    } else if (keyValue === '/') {
        performOperation('/');
    } else if (keyValue === '=' || keyValue === 'Enter') {
        calculateResult();
    } else if (keyValue === 'Backspace') {
        backspace();
    } else if (keyValue === 'Delete') {
        clearDisplay();
    }
});

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = event.target.textContent;
        if (buttonValue >= 0 && buttonValue <= 9) {
            appendToDisplay(buttonValue);
        } else if (buttonValue === '+') {
            performOperation('+');
        } else if (buttonValue === '-') {
            performOperation('-');
        } else if (buttonValue === '*') {
            performOperation('*');
        } else if (buttonValue === '/') {
            performOperation('/');
        } else if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else if (buttonValue === '<') {
            backspace();
        }
    });
});

function appendToDisplay(value) {
    display.value += value;
}

function performOperation(operator) {
    previousOperation = display.value;
    display.value += operator;
    currentOperation = operator;
}

function calculateResult() {
    let result = eval(display.value);
    display.value = result;
    previousOperation = '';
    currentOperation = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display
        .value = '';
    previousOperation = '';
    currentOperation = '';
}