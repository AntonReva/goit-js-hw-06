let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const textEl = document.querySelector("#value");

incrementBtn.addEventListener("click", clickHandlerIncrementBtn);
decrementBtn.addEventListener("click", clickHandlerDecrementBtn);

function clickHandlerIncrementBtn() {
  counterValue += 1;
  textEl.textContent = counterValue;
}

function clickHandlerDecrementBtn() {
  counterValue -= 1;
  textEl.textContent = counterValue;
}

// !!! РАЗБИРАЛИ НА ЗАНЯТИИ
// const refs = {
//   incrementBtn: document.querySelector('[data-action="increment"]'),
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   textEl: document.querySelector('#value'),
// };

// refs.incrementBtn.addEventListener('click', onIncrementClick);
// refs.decrementBtn.addEventListener('click', onDecrementClick);

// function onIncrementClick(e) {
//   counterValue += 1;
//   refs.textEl.textContent = counterValue;
// }

// function onDecrementClick(e) {
//   counterValue -= 1;
//   refs.textEl.textContent = counterValue;
// }
