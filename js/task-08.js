
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls > input');

const destroyBoxes = function () {
  const divClear = document.querySelectorAll('#boxes div');
  for (let i = 0; i < divClear.length; i += 1) {
    divClear[i].remove();
  }
}

renderBtn.addEventListener('click', showInputValues)
destroyBtn.addEventListener('click', destroyBoxes);

function showInputValues() {
  createBoxes(input.value);
}

const createBoxes = function (amount) {
  for (let i = 0; i < amount; i += 1) {
    const divAdd = document.createElement('div');
    divAdd.classList.add('design');
    divAdd.style.width = widths[i];
    divAdd.style.height = heights[i];
    divAdd.style.backgroundColor = getRandomColor();
    boxes.appendChild(divAdd);
  }
}

const getRandomColor = function () {
  const r = () => Math.random() * (255 - 1) + 1;
  return `rgb(${r()}, ${r()}, ${r()})`;
}


const widths = ['30px', '40px', '50px', '60px', '70px', '80px', '90px', '100px'];
const heights = ['30px', '40px', '50px', '60px', '70px', '80px', '90px', '100px'];






















