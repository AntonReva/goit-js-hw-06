const input = document.querySelector("#validation-input");
input.addEventListener("blur", inputBlur);

function inputBlur(event) {
  event.currentTarget.value.length > input.dataset.length
    ? input.classList.add("valid")
    : input.classList.add("invalid");

  //   if (event.currentTarget.value.length > input.dataset.length) {
  //     input.classList.add("valid");
  //     console.log(event.currentTarget.value);
  //   } else {
  //     input.classList.add("invalid");
  //   }
}
