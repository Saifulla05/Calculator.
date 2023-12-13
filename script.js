document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result = 0;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          alert('Division by zero is not allowed.');
          return;
        }
        break;
      default:
        alert('Invalid operation');
        return;
    }
  
    document.getElementById('result').innerText = 'Result: ' + result;
  });
  