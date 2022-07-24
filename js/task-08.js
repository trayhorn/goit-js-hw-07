
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls > input');

renderBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);
// input.addEventListener('blur', showNumber);

function createBoxes() {
  for (let i = 0; i < input.value; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.textContent = '123456';
    boxes.appendChild(newDiv);
  };
}

// function showNumber() {
//   for (let i = 0; i < input.value; i += 1) {
//     const newDiv = document.createElement('div');
//     newDiv.textContent = '123456';
//     boxes.appendChild(newDiv);
//   };
// }








