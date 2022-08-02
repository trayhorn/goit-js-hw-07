
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls > input');

renderBtn.addEventListener('click', showInputValues)
destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes () {
  const divClear = document.querySelectorAll('#boxes div');
  for (let i = 0; i < divClear.length; i += 1) {
    divClear[i].remove();
  }
  input.value = 0;
}

function showInputValues() {
  createBoxes(input.value);
}

function getRandomColor() {
  const r = () => Math.random() * (255 - 1) + 1;
  return `rgb(${r()}, ${r()}, ${r()})`;
}

const size = 10;

function setBoxSize(number) {
  let arr = [size];

  for (let i = 0; i < 99; i += 1) {
    number += 10;
    arr.push(number);
  }
  return arr;
}

const proportions = setBoxSize(size);

const createBoxes = function (amount) {
  for (let i = 0; i < amount; i += 1) {
    const divAdd = document.createElement('div');
    divAdd.classList.add('design');
    divAdd.style.width = proportions[i] + 'px';
    divAdd.style.height = proportions[i] + 'px';
    divAdd.style.backgroundColor = getRandomColor();
    boxes.appendChild(divAdd);
  }
}





















