
const input = document.querySelector('.validation-input');

input.addEventListener('blur', changeBorderColor);

function changeBorderColor(event) {
  const currentInput = event.currentTarget;
  const inputLength = Number(input.dataset.length)
  if (currentInput.value.length === inputLength) {
    currentInput.classList.remove("invalid");
    currentInput.classList.add("valid");
  } else {
    currentInput.classList.remove("valid");
    currentInput.classList.add("invalid");
  }
}

