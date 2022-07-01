const pass1 = document.querySelector('.pass1');
const pass2 = document.querySelector('.pass2');
const feedback = document.querySelector('.feedback');
const PassPattern1 = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{8,}$/;
const PassPattern2 = /^.{12,}$/;


// live feedback
pass1.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  if(PassPattern1.test(e.target.value)){
    feedback.textContent = 'That password is valid!'
    feedback.setAttribute('class', 'ok1')
    pass1.setAttribute('class', 'ok')
    if(PassPattern2.test(e.target.value)){
        feedback.textContent = 'That password is Strong!'
        feedback.setAttribute('class', 'success1')
        pass1.setAttribute('class', 'success')
    }
  } else {
    feedback.textContent = 'Password must contain a minimum of 8 letters and a symbol';
    feedback.setAttribute('class', 'error1')
    pass1.setAttribute('class', 'error')
  }
  if(pass1.value===pass2.value){
    pass2.setAttribute('class', 'success')
  } else {
    pass2.setAttribute('class', 'error')
  }
});
pass2.addEventListener('keyup', e => {
    if(pass1.value===pass2.value){
      pass2.setAttribute('class', 'success')
    } else {
      pass2.setAttribute('class', 'error')
    }
  });