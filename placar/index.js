const counter = document.querySelector('#counterValue');
const ButonDecrement = document.querySelector('#buttonDecrement');
const ButonIncrement = document.querySelector('#buttonIncrement');

const counter1 = document.querySelector('#counterValue1');
const ButonDecrement1 = document.querySelector('#buttonDecrement1');
const ButonIncrement1 = document.querySelector('#buttonIncrement1');

let value = counter.value;

buttonIncrement.addEventListener('click',() => {
    value = ++value;
    counter.value = value;
});

buttonDecrement.addEventListener('click', () => {
    value = value !== 0 ? --value : 0;
    counter.value = value;
});

//+++++++++++++++++++++++++++++++++++++

let value1 = counter1.value;

buttonIncrement1.addEventListener('click',() => {
    value1 = ++value1;
    counter1.value = value1;
});

buttonDecrement1.addEventListener('click', () => {
    value1 = value1 !== 0 ? --value1 : 0;
    counter1.value = value1;
});