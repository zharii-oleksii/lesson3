document.getElementById("button1").addEventListener("click", function () {
    let number = parseInt(prompt('Enter a whole number'));

    while (isNaN(number)) {
        number = parseInt(prompt('Error: your input is not a number. Enter a 5-digit number'));
    }
    while (number.toString().length !== 5) {
        number = parseInt(prompt('Error: yours number length != 5. Enter a 5-digit number'));
        while (isNaN(number)) {
            number = parseInt(prompt('Error: non-digit input. Enter a digit.'));
        }
    }

    number = number.toString();
    let result = number.split('').join(' ');

    alert(result);
});

document.getElementById("button2").addEventListener("click", function () {
    let valuesSum = 0;
    for (let i = 0; i < 3; i++) {
        let value = parseInt(prompt('Enter value #' + (i + 1)));
        while (isNaN(value)) {
            value = parseInt(prompt('Enter value #' + (i + 1)));
        }
        if (!isNaN(value)) {
            valuesSum = valuesSum + value
        }
    }
    alert('Arithmetic average = ' + (valuesSum / 3))
});

document.getElementById("button3").addEventListener("click", function () {
    let a = parseInt(prompt('Enter A ='));
    while (isNaN(a)) {
        a = parseInt(prompt('Please enter A. It should be a digit'));
    }
    let b = parseInt(prompt('Enter B ='));
    while (isNaN(b)) {
        b = parseInt(prompt('Please enter B. It should be a digit'));
    }
    let operator = prompt('Enter one of the following operators (+ - * /)');
    const expArray = ['+', '-', '*', '/'];
    while (!expArray.includes(operator)) {
        operator = prompt('Please enter only valid operator (+ - * / )');
    }
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                result = 'Err: divide by 0';
                alert(result);
                exit;
            } else {
                result = a / b
            }
    }
    alert(a + ' ' + operator + ' ' + b + ' = ' + result)



});

document.getElementById("button4").addEventListener("click", function () {
    const name = prompt('What is your name?').toLowerCase();
    alert('Hello, ' + name.charAt(0).toUpperCase() + name.slice(1) + ' ! How are you?')
});

document.getElementById("button5").addEventListener("click", function () {
    const firstValue = prompt('Enter first value')
    const secondValue = prompt('Enter second value')
    alert(firstValue === secondValue)
});

document.getElementById("button6").addEventListener("click", function () {
    let hours = parseInt(prompt("Enter the number of hours:"));
    while (isNaN(hours)) {
        hours = parseInt(prompt("Err: wrong input. Enter the number of hours AS DIGIT:"));
    }
    let secondsInHours = hours * 3600;
    alert('There are ' + secondsInHours + ' seconds in ' + hours + ' hours')
});