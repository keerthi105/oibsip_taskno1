// Selecting display elements
const historyDisplay = document.getElementById('history');
const resultDisplay = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

// Variables for calculation
let history = '';
let result = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.innerText;

    if (value === 'C') {
      history = '';
      result = '';
    } else if (value === '⌫') {
      history = history.slice(0, -1);
    } else if (value === '=') {
      try {
        if (history.match(/^\d+$/)) {
          // If the number is an integer, use BigInt
          result = eval(history).toString();
        } else {
          // Use normal eval for floating-point numbers
          result = parseFloat(eval(history)).toPrecision(12);
        }
      } catch {
        result = 'Error';
      }
    } else {
      if (history.length < 20) { // Prevent extremely long input
        history += value;
      } else {
        alert('Input too long!');
      }
    }
let result = eval(expression); 
result = Number(result.toFixed(10)); 
document.getElementById('result').innerText = result;

    historyDisplay.innerText = history;
    resultDisplay.innerText = result || '0';
  });
});
