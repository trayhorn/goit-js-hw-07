const input = document.querySelector('.font-size-control');
const text = document.querySelector('.text');

input.addEventListener('input', changeFontSize);

function changeFontSize(event) {
  text.style.fontSize = event.currentTarget.value / 2 + 'px';
}