const input = document.querySelector("#validation-input");
input.addEventListener("blur", inputBlur);

function inputBlur(event) {
  input.classList.remove("invalid");
  event.currentTarget.value.length > input.dataset.length
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}
