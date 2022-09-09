const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//ВАРИАНТ 1
const elements = [];
const list = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  elements.push(itemEl);
}
list.append(...elements);
console.log(list);

//ВАРИАНТ 2
// ingredients.map(elem => {
//   const list = document.querySelector('#ingredients');
//   const itemEl = document.createElement('li');
//   itemEl.textContent = elem;
//   itemEl.classList.add('item');
//   list.appendChild(itemEl);
// });
// console.log(document);
