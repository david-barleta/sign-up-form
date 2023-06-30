const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

confirmPasswordInput.addEventListener('input', function(event) {
  if (confirmPasswordInput.value !== passwordInput.value) {
    console.log("Passwords don't match");
    confirmPasswordInput.classList.add('error');
  } else if (confirmPasswordInput.value == passwordInput.value) {
    confirmPasswordInput.classList.remove('error');
  }
})

form.addEventListener('submit', function(event) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    console.log("Passwords don't match - recheck before submitting");
    event.preventDefault(); // Prevents form submissions
  }
})