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

const btn = document.querySelector('#send');

function login() {
  const inputEmail = document.querySelector('#email');
  const inputPassword = document.querySelector('#password');

  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btn.addEventListener('click', login);
