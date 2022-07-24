const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('.value');
const clearCounter = document.querySelector('.clear');

let counterValue = Number(counter.textContent);

const incrementAction = () => {
  counterValue += 1;
  counter.textContent = counterValue;
}
const decrementAction = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
}

increment.addEventListener('click', incrementAction);
decrement.addEventListener('click', decrementAction);
clearCounter.addEventListener('click', () => {
  counterValue = 0;
  counter.textContent = counterValue;
})

