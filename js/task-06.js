const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener('blur', checkInputLength);

function checkInputLength () {
    if (inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid')
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid');
        };
    } if (inputEl.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid');
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid');
        };
    };
};