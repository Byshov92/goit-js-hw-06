
const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    }
};


const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    counter.textContent = counterValue.value;
});


incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    counter.textContent = counterValue.value;
});