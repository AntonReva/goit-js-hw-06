const categoriesNumber = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesNumber.length);
console.log(" ");
categoriesNumber.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.childElementCount);
  console.log(" ");
});

// console.log(' ');

// const totalEl = document.querySelectorAll('.item ul');
// totalEl.forEach(el => {
//   console.log('Elements:', el.childElementCount);
// });

// console.log(' ');

// const categories = document.querySelectorAll('h2');
// categories.forEach(category => {
//   console.log('Category:', category.textContent);
// });
