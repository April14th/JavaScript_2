'use strict';

const sendBtn = document.querySelector('.btn');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');

function validateFields() {
    validateName();
    validatePhone();
    validateEmail();
    validateMessage();
}

function validateName() {
    if (inputName.value.match(/^[a-zа-я]{1,}$/i) == null) {
        inputName.classList.add('error');
        document.querySelector('.message_name').classList.remove('hidden');
    } else {
        console.log(inputName.value.match(/[a-zа-я]{1,}/ig));
        inputName.classList.remove('error');
        document.querySelector('.message_name').classList.add('hidden');
    }
}

function validatePhone() {
    if (inputPhone.value.match(/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/ig) == null) {
        inputPhone.classList.add('error');
        document.querySelector('.message_phone').classList.remove('hidden');
    } else {
        console.log(inputPhone.value.match(/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/ig));
        inputPhone.classList.remove('error');
        document.querySelector('.message_phone').classList.add('hidden');
    }
}

function validateEmail() {
    if (inputEmail.value.match(/^[a-z0-9._-]+@[a-z]+\.[a-z]{2}$/ig) == null) {
        inputEmail.classList.add('error');
        document.querySelector('.message_email').classList.remove('hidden');
    } else {
        console.log(inputEmail.value.match(/^[a-z0-9._-]+@[a-z]+\.[a-z]{2}$/ig));
        inputEmail.classList.remove('error');
        document.querySelector('.message_email').classList.add('hidden');
    }
}

function validateMessage() {
    if (inputMessage.value.match(/^[a-zа-я0-9\W]{1,}$/ig) == null) {
        inputMessage.classList.add('error');
        document.querySelector('.message_textarea').classList.remove('hidden');
    } else {
        console.log(inputMessage.value.match(/^[a-zа-я0-9\W]{1,}$/ig));
        inputMessage.classList.remove('error');
        document.querySelector('.message_textarea').classList.add('hidden');
    }
}

sendBtn.addEventListener('click', function() {
    event.preventDefault();
    validateFields();
});