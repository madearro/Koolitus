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
    } else {
    alert('Not supported!');
}
console.log(numbers);
}

const clickedEquals = () => {
    numbers.push(inputField.innerHTML);
    let answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        answer += parseInt(numbers[i]);
    }
    numbers = [];
    inputField.innerHTML = answer;
}


const clearInput = () => {
    inputField.innerHTML = '0';
    numbers = [];
}

/*const clickedEquals = async () => {
    numbers.push(inputField.innerHTML);
    console.log('equals!!', numbers);
    const response = await fetch('http://localhost:3000/api/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numbers)
    })
    const answer = await response.json();
    console.log('vastus:', answer);
    input.innerHTML = 'vastus';
}*/