const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
let currentValue = document.getElementById('value');

plusButton.addEventListener('click', increaseValue);
minusButton.addEventListener('click', decreaseValue);

let value = 0;

function increaseValue() {
  
  value++;

  currentValue.innerHTML = value;
}

function decreaseValue() {

  if (value > 0) {
    value--;
  }

  currentValue.innerHTML = value;
}