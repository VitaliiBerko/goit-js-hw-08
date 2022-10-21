
import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[type="email"]'),
    message: document.querySelector('[name="message"]'),
    btn: document.querySelector('button'),
}

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateText();

function onFormSubmit(e) { 
    e.preventDefault();    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);    
    console.log(formData);
};

function onFormInput(e) {    
    formData[e.target.name] = e.target.value;    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function populateText() {

    const saveMssage = JSON.parse(localStorage.getItem(STORAGE_KEY));    

    if(saveMssage) {
        refs.email.value = saveMssage.email;
        refs.message.value = saveMssage.message;
    }
}

