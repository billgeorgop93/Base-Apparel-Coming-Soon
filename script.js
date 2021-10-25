const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // Get the value from the inputs
  // Remove all of the white space with trim method
  const emailValue = email.value.trim();

  if (emailValue === ''){
    // Show error & add error class
    setErrorFor(email, 'Email cannot be blank');    
  }
  else if (!isEmailValid(emailValue)){
    setErrorFor(email, 'Please provide a valid email');
  }
  else {
    clearErrors(email);
    // To clear any errors left
    setTimeout(alertSuccess, 0);
  }
}

// Clear error signs
function clearErrors(input) {
  const formControl = input.parentElement.parentElement;
  // Add error class
  formControl.className = 'hide error'
}

function alertSuccess() {
  alert(`Success!`);
}

function setErrorFor(input, message) {
  const formControl = input.parentElement.parentElement;
  const small = formControl.querySelector('small');

  // Add error message inside small
  small.innerText = message;

  // Add error class
  formControl.className = 'display error';

  // Adding error class to input
  input.className = 'display error';
}

// Checking email input validity
function isEmailValid(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}