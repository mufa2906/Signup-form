
function showError(errorElement, errorMessage) {
  let element = document.querySelector('.' + errorElement);
  element.classList.add('display-error');
  element.innerHTML = errorMessage;
}

function showErrorInput(errorInput) {
  let input = form.elements[errorInput];
  input.classList.add('input-error');
  // input.style.border = '2px solid hsl(0, 100%, 74%)';
  if (errorInput === "email") {
    input.placeholder ='email@example.com'
    input.classList.add('input-email-error');
  }
  else {input.placeholder = ''};
}

function showErrorIcon(errorIcon) {
  let icon = document.querySelector('.' + errorIcon);
  icon.style.display = 'block';
}


function cleanError(){
  let errors = document.querySelectorAll(".error");
  for(let error of errors){
    error.classList.remove('display-error');
  }
}


let form = document.forms['trial-form'];
// console.log(form);

form.addEventListener('submit', (event) =>  {

  cleanError();

  if (form.firstName.value === '') {
    showError("firstname-error", "First Name cannot be empty");
    showErrorInput("firstName");
    showErrorIcon("error-icon-firstName");
  }
  
  if (form.lastName.value === '') {
    showError("lastname-error", "Last Name cannot be empty");
    showErrorInput("lastName");
    showErrorIcon("error-icon-lastName");
  }
  
  if (form.email.value === '') {
    showError("email-error", "Looks like this is not an email");
    showErrorInput("email");
    showErrorIcon("error-icon-email");
  }
  
  if (form.password.value === '') {
    showError("password-error", "Password cannot be empty");
    showErrorInput("password");
    showErrorIcon("error-icon-password");
  }
  form.reset();
  event.preventDefault();
})