const userNameInput = document.querySelector("#name-input");
const userNameOutput = document.querySelector("#name-output");

userNameInput.addEventListener("input", handleInput);

function handleInput(event) {
  let inputText = event.target.value.trim();

  if (inputText === "") {
    userNameOutput.textContent = "Anonymous";
  } else {
    userNameOutput.textContent = inputText;
  }
}
