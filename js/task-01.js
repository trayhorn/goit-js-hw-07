const listEl = document.querySelector('#categories');

console.log(`В списке ${listEl.children.length} категории`);

const listItemTitleEl = document.querySelector('.item h2');
const titleEl = listItemTitleEl.textContent;

console.log(`Категория: ${titleEl}`);

const listItemUlEl = document.querySelector('.item ul');
console.log(`Количество элементов: ${listItemUlEl.children.length}`);


const listItemsEl = listEl.children;
console.log(listItemsEl);

const item2El = document.querySelector('.item2 h2');
console.log(item2El.textContent);

const item3El = document.querySelector('.item3 h2');
console.log(item3El.textContent);