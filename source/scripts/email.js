const enterEmail = document.querySelector("[name='admin_email[]']");
const email = document.querySelector("[name='Email']");
const order = document.querySelector('.order');


order.addEventListener('submit', (e) => {
  e.preventDefault();
  enterEmail.value = email.value;
  console.log(email.value);
  console.log(enterEmail.value);
});