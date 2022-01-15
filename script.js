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
