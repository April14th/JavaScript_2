'use strict';

class ValidationForm {
    constructor() {
        this.inputName = document.getElementById('name'),
        this.inputPhone = document.getElementById('phone'),
        this.inputEmail = document.getElementById('email'),
        this.inputMessage = document.getElementById('message'),
        this.validateFields();
    }

    validateFields() {
        this.validateName();
        this.validatePhone();
        this.validateEmail();
        this.validateMessage();
    }
    
    validateName() {
        if (this.inputName.value.match(/^[a-zа-я]{1,}$/i) == null) {
            this.inputName.classList.add('error');
            document.querySelector('.message_name').classList.remove('hidden');
        } else {
            this.inputName.classList.remove('error');
            document.querySelector('.message_name').classList.add('hidden');
        }
    }

    validatePhone() {
        if (this.inputPhone.value.match(/^\+7\([\d]{3}\)[\d]{3}-[\d]{4}$/ig) == null) {
            this.inputPhone.classList.add('error');
            document.querySelector('.message_phone').classList.remove('hidden');
        } else {
            this.inputPhone.classList.remove('error');
            document.querySelector('.message_phone').classList.add('hidden');
        }
    }
    
    validateEmail() {
        if (this.inputEmail.value.match(/^[a-z0-9._-]+@[a-z]+\.[a-z]{2}$/ig) == null) {
            this.inputEmail.classList.add('error');
            document.querySelector('.message_email').classList.remove('hidden');
        } else {
            this.inputEmail.classList.remove('error');
            document.querySelector('.message_email').classList.add('hidden');
        }
    }
    
    validateMessage() {
        if (this.inputMessage.value.match(/^[a-zа-я0-9\W]{1,}$/ig) == null) {
            this.inputMessage.classList.add('error');
            document.querySelector('.message_textarea').classList.remove('hidden');
        } else {
            this.inputMessage.classList.remove('error');
            document.querySelector('.message_textarea').classList.add('hidden');
        }
    }
}

const sendBtn = document.querySelector('.btn');

sendBtn.addEventListener('click', function() {
    event.preventDefault();
    let validationForm = new ValidationForm();
});