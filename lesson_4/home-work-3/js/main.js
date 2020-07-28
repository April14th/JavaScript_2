'use strict';

const sendBtn = document.querySelector('.btn');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');

function validateName() {
    if (inputName.value.match(/^[a-zа-я]{1,}$/i) == null) {
        inputName.classList.add('error');
    } else {
        console.log(inputName.value.match(/[a-zа-я]{1,}/ig));
        inputName.classList.remove('error');
    }
}

function validatePhone() {
    if (inputPhone.value.match(/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/ig) == null) {
        inputPhone.classList.add('error');
    } else {
        console.log(inputPhone.value.match(/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/ig));
        inputPhone.classList.remove('error');
    }
}

function validateEmail() {
    if (inputPhone.value.match(/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/ig) == null) {
        inputPhone.classList.add('error');
    } else {
        console.log(inputPhone.value.match(/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/ig));
        inputPhone.classList.remove('error');
    }
}

sendBtn.addEventListener('click', function(event) {
    event.preventDefault();
    validateName();
    validatePhone();
    validateEmail();
})