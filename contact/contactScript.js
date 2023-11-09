// To be added to the main scripts folder when it is created.
// Want to prevent merge issues for now.


// submit button activation
// source: https://stackoverflow.com/questions/67961789/enable-submit-button-after-form-fields-are-fill

const submitButton = document.getElementById('submit-button');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const contactReason = document.getElementById('contact-reason');
const message = document.getElementById('message');

//source: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
    if (String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById('email').classList.remove('invalid-input');
        return true;
    } else {
        if (email.value != '') {
            document.getElementById('email').classList.add('invalid-input');
            document.getElementById('email').placeholder = '';
        }
        return false;
    }
}

const validatePhoneNumber = (number) => {
    if (String(number).toLowerCase().match(/08[35679]\d{7}|0[1245679]\d{6,9}/)) {
        document.getElementById('phone-number').classList.remove('invalid-input');
        return true;
    } else {
        if (phoneNumber.value) {
            document.getElementById('phone-number').classList.add('invalid-input');
            document.getElementById('phone-number').placeholder = '';
        }
        return false;
    }
}

const validateContactReason = (reason) => {
    if (reason != '') {
        return true;
    } else {
        return false;
    }
}

const validateMessage = (message) => {
    if (message != '') {
        return true;
    } else {
        return false;
    }
}

function checkButtonActivation() {
    let emailIsValid = validateEmail(email.value);
    let phoneIsValid = validatePhoneNumber(phoneNumber.value);
    let contactReasonIsValid = validateContactReason(contactReason.value);
    let messageIsValid = validateMessage(message.value);


    if (emailIsValid && phoneIsValid && contactReasonIsValid && messageIsValid) {
        console.log(contactReason.value);
        submitButton.disabled = false;
    } else {
        console.log(contactReason.value);
        submitButton.disabled = true;
    }
}

email.addEventListener('change', (event) => checkButtonActivation());
phoneNumber.addEventListener('change', (event) => checkButtonActivation());
contactReason.addEventListener('change', (event) => checkButtonActivation());
message.addEventListener('change', (event) => checkButtonActivation());


