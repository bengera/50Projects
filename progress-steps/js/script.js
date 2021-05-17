'use strict';

const progressEl = document.getElementById('progress')
const prevEl = document.getElementById('prev')
const nextEl = document.getElementById('next')
const circleEl = document.querySelectorAll('.circle')
const msgPhrases = [
    'Enter your details',
    'Confirm your basket items',
    'Add discount codes',
    'Choose delivery method',
    'Confirm all information is correct',
    'Your order has been placed'
]

console.log(msgPhrases);

let currentNum = 1;
let messageNum = 1;


nextEl.addEventListener('click', () => {
    currentNum++
    messageNum++

    if (currentNum > circleEl.length) {
        currentNum = circleEl.length
    }

    update();


})

prevEl.addEventListener('click', () => {
    currentNum--
    messageNum--

    if (currentNum < 1) {
        currentNum = 1
    }

    update();


})



function update() {
    circleEl.forEach((circle, idx) => {
        if (idx < currentNum) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circleEl.length - 1) *
        100 + '%';

    if (currentNum === 1) {
        prevEl.disabled = true;
    } else if (currentNum === circleEl.length) {
        nextEl.disabled = true;
    } else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }

    const messageEl = document.getElementById('message')

    //getMessages();

    if (messageNum === 1) {
        messageEl.innerText = "Enter your details"
    } else if (messageNum === 2) {
        messageEl.innerText = "Confirm your basket items"
    } else if (messageNum === 3) {
        messageEl.innerText = "Add discount codes"
    } else if (messageNum === 4) {
        messageEl.innerText = "Choose delivery method"
    } else if (messageNum === 5) {
        messageEl.innerText = "Confirm all information is correct"
    } else {
        messageEl.innerText = "Your order has been placed"
    }

}
/*
function getMessages() {
    if (messageNum ===1) {
        messageNum.innerText = msgPhrases[0];
    
    } else {
        
    }
}

*/