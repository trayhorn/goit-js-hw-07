// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Это заголовок страницы :)';
// console.log(titleEl);


// document.body.appendChild(titleEl);
// console.log(document.body);

// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site-nav__item');

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site-nav__link');
// navLinkEl.textContent = 'Личный кабинет';
// navLinkEl.href = '/profile';


// console.log(navItemEl);
// console.log(navLinkEl);

// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

// const animalsNavEl = document.querySelector('.animals-nav');
// // animalsNavEl.appendChild(navItemEl);
// animalsNavEl.insertBefore(navItemEl, null)

// - - - Work with collectios - - -

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ]

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// console.log(elements);

// colorPickerContainerEl.append(...elements);


// const makeColorPickerOptions = (options) => {
//   return options.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   })
// }

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//   const option = colorPickerOptions[i];

  // const buttonEl = document.createElement('button');
  // buttonEl.type = 'button';
  // buttonEl.textContent = option.label;
  // buttonEl.style.backgroundColor = option.color;

//   elements.push(buttonEl);
// }

// console.log(elements);

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

genNew.addEventListener("click", setBg);
setBg();

















