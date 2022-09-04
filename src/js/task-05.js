const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  title.textContent = event.currentTarget.value;
}
