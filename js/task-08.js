const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", validateSubmit);

function validateSubmit(event) {
  event.preventDefault();
  if (
    !event.currentTarget.elements.email.value ||
    !event.currentTarget.elements.password.value
  ) {
    return alert("All fields must be filled.!");
  }
  else if (
    !event.currentTarget.elements.email.value.includes("@") ||
    !event.currentTarget.elements.email.value.includes(".")
  ) {
    return alert("Invalide email!");
  } else {
    const formData = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.dir(formData);
    event.currentTarget.reset();
  }
}
