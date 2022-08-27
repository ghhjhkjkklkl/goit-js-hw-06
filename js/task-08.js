const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}












// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//     event.preventDefault();
//     if (form.email.value === "" || form.password.value === "") {
//         alert("Please fill in all the fields!");
//     } else {
//         const formData = new FormData(form);
//         formData.append(form.email.value, form.password.value)
//         console.log(`Email: ${form.email.value}, Password: ${form.password.value}`);
//     }
// };
// console.log(formData);
// document.querySelector('.login-form').reset();
