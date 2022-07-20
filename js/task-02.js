const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const makeProductsList = (productList) => {
  const mainListEl = document.querySelector('.ingredients');
  const elements = [];

  for (let i = 0; i < productList.length; i += 1) {
    const listEl = document.createElement('li');
    listEl.textContent = productList[i];

    elements.push(listEl);
  }
  mainListEl.append(...elements);
}

console.log(makeProductsList(ingredients));




