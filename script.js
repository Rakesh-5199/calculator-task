let displayValue = '';

function addToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = 0;
  document.getElementById('display').value = displayValue;
  document.getElementById('resultvalue').textContent = '';
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    document.getElementById('resultvalue').textContent = displayValue;
    displayValue = result.toString();
    console.log(displayValue);
  } catch (error) {
    document.getElementById('display').value = '';
  }
}

//keybord value

document.addEventListener('keydown', function(e) {
  const key = e.keyCode;
  if (key === 56 && e.shiftKey) { // Check for '*' key (Shift + 8)
    addToDisplay('*');
  }
 else if (48 <= key && key <= 57) { // Check for numbers 0-9
    const value = key - 48; 
    console.log(value)
    // Convert key code to number value
    addToDisplay(value.toString());
  } else if (key === 187 || key === 107) { // Check for '+' key
    addToDisplay('+');
  } else if (key === 189 || key === 109) { // Check for '-' key
    addToDisplay('-');
  }  else if (key === 191 || key === 111) { // Check for '/' key
    addToDisplay('/');
  } else if (key === 13) { // Check for 'Enter' key
    calculate();
  } else if (key === 27) { // Check for 'Escape' key
    clearDisplay();
  }
  else if (key === 8) {
    clearDisplay();
  }
});