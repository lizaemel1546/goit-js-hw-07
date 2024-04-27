const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let emailValue = form.elements.email.value.trim();
  let passwordValue = form.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    let info = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(info);
    form.reset();
  }
}
