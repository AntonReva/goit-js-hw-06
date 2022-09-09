const refs = {
  inputScroll: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.inputScroll.addEventListener("input", scroll);

function scroll(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
