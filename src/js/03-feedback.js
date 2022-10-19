
const ref = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[type="email"]'),
    message: document.querySelector('[name="message"]'),
    submit: document.querySelector('button'),
}

// const form = document.querySelector('.feedback-form');
// console.log(ref.form);
// // const email = form.querySelector('[type="email"]');
// console.log(ref.email);

// // const message = form.querySelector('[name="message"]');
// console.log(ref.message);
// console.log(ref.submit);


ref.form.addEventListener('input', handleInput);

function handleInput(e) {
}

ref.submit.addEventListener('submit', onSubmitClick);

function onSubmitClick(e) {
    e.prevenDefault();
    
    
}
