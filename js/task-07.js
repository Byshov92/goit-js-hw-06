const textControllerEl = document.querySelector('#font-size-control');
const controlledTextEl = document.querySelector('#text');

textControllerEl.addEventListener('input', function () {
    controlledTextEl.style.fontSize = `${textControllerEl.value * 1.1}px`;
});