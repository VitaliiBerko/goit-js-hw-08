
import { parse } from "handlebars";
import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[type="email"]'),
    message: document.querySelector('[name="message"]'),
    btn: document.querySelector('button'),
}

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateText();

function onFormSubmit(e) { 
    e.preventDefault();    
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY); 
     
    console.log(formData);
    formData = {};   
};

function onFormInput(e) { 
    // let persistedFormData = localStorage.getItem(STORAGE_KEY);
    // persistedFormData =persistedFormData? JSON.parse(persistedFormData):{};
    // persistedFormData[e.target.name] = e.target.value;
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedFormData));

    formData[e.target.name] = e.target.value; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    
}

function populateText() {
    let saveMssage = localStorage.getItem(STORAGE_KEY);   
    if(saveMssage) {

        saveMssage =JSON.parse(saveMssage);

        Object.entries(saveMssage).forEach(([name, value]) => {
            formData[name] =value;

            refs.form.elements[name].value = value;             

       })     
    }    
}

