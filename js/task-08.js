const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  email === "" || password === ""
    ? alert("Необходимо заполнить все поля!")
    : console.log({ email: email, password: password });

  // if (email === '' || password === '') {
  //   alert('Необходимо заполнить все поля!');
  // } else {
  //   console.log({ email: email, password: password });
  // }
}
