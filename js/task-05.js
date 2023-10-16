const inputHolder = document.querySelector('#name-input');
const outputHolder = document.querySelector('#name-output');

inputHolder.addEventListener('input', function () {

    if (inputHolder.value.trim() === '') {
        outputHolder.textContent = 'Anonymous';
    } else {
        outputHolder.textContent = inputHolder.value.trim();
    };
});