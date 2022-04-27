const inputField = document.getElementById('input');

let isOperatorLastClicked = false;
let numbers = [];

const clickedNumber = (number) => {
    if (inputField.innerHTML === '0' || isOperatorLastClicked) {
        inputField.innerHTML = number;
    } else {
        inputField.innerHTML += number;
    }
    isOperatorLastClicked = false;
}

const clickedOperator = (operator) => {
    isOperatorLastClicked = true;
    if (operator === '+') {
        numbers.push(inputField.innerHTML);
        if clickedEquals() {
            let sum(numbers) => {
                var summa = 0;
                for (var i = 0; i < numbers.length; i++) {
                    summa += numbers[$i];
                    return summa;
                    inputField.innerHTML = summa;
                }
            }


        }
    } else if (operator === '-') => {
        isOperatorLastClicked = true;

    }
    console.log(numbers);
}

const clickedEquals = async () => {
    numbers.push(inputField.innerHTML);
    console.log('equals!!', numbers);
    const response = await fetch('http://localhost:3000/api/add', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numbers)
    })
    const answer = await response.json();
    console.log('vastus:', answer);
    input.innerHTML = 'vastus';
}

const clearInput = () => {
    inputField.innerHTML = '0';
    numbers = [];

}