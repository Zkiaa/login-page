const formBox = document.querySelector(".form-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  formBox.classList.add("active");
});
loginLink.addEventListener("click", () => {
  formBox.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
  formBox.classList.add("active-popup");
});
iconClose.addEventListener("click", () => {
  formBox.classList.remove("active-popup");
});
