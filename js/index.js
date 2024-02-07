const subscribeBtnEl = document.querySelector('.subscribe-btn');

subscribeBtnEl.addEventListener('click', () => {
  const inputEl = document.querySelector('.email');
  const email = inputEl.value;

  if (checkEmail(email)) {
    document.querySelector('.form-container').style.display = 'none';
  document.querySelector('.success-container').style.display = 'flex';
  }
  else {
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.email').classList.add('email-error');
  }
});

const dismissBtnEl = document.querySelector('.dismiss-btn');

dismissBtnEl.addEventListener('click', () => {
  document.querySelector('.form-container').style.display = 'flex';
  document.querySelector('.success-container').style.display = 'none';
});

function checkEmail(input) {
  const emailRegEx = /[^\s@]+@[^\s@]+\.[^\s@]/;

  return emailRegEx.test(input);  
}