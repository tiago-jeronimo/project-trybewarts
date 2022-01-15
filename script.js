/* const { RuleTester } = require("eslint"); */
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btn = document.querySelector('#send');

const pushBtn = document.getElementById('submit-btn');
const agreementState = document.getElementById('agreement');
function pushBtnState() {
  const agreementCheckValue = document.getElementById('agreement').checked;
  if (agreementCheckValue === true) {
    pushBtn.disabled = false;
  }
  if (agreementCheckValue === false) {
    pushBtn.disabled = true;
  }
}
agreementState.addEventListener('click', pushBtnState);

function loginCheck() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btn.addEventListener('click', loginCheck);
