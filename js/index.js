const EmailInputID = 'EmailInput';
const EmailInputErrorLabel = 'EmailInputErrorLabel';
const DataValPattern = 'valPattern';
const HasErrorClass = 'hasError';
const HiddenClass = 'hidden';

$(() => {

    $('#SubscribeBtn').on('click', () => {
        subscribe();
    })

});

const subscribe = () => {
    var emailInput = $(`#${EmailInputID}`);
    var emailInputErrorLabel = $(`#${EmailInputErrorLabel}`);

    removeErrors(emailInput, emailInputErrorLabel);

    if (!validateEmailInput(emailInput)) {
        addErrors(emailInput, emailInputErrorLabel);
        return;
    }

    //Show submission.
}

const validateEmailInput = (emailInput) => {
    var emailInputValue = emailInput.val();
    var regexText = emailInput.data(`${DataValPattern}`);
    var regex = new RegExp(regexText);
    return regex.test(emailInputValue)
}

const addErrors = (emailInput, emailInputErrorLabel) => {
    emailInput.addClass(`${HasErrorClass}`);
    emailInputErrorLabel.removeClass(`${HiddenClass}`);
}

const removeErrors = (emailInput, emailInputErrorLabel) => {
    emailInput.removeClass(`${HasErrorClass}`);
    emailInputErrorLabel.addClass(`${HiddenClass}`);
}