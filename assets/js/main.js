// Slider JS
let nextButton = document.getElementById('next-btn');
let prevButton = document.getElementById('prev-btn');
let sliders = document.getElementsByClassName('slider');
let sliderNo = 1;

function next() {
    document.getElementById('slider' + sliderNo).classList.remove('active');
    sliderNo ++

    if (sliderNo > sliders.length) {
        sliderNo = 1;
    }

    document.getElementById('slider' + sliderNo).classList.add('active');
}

function prev() {
    document.getElementById('slider' + sliderNo).classList.remove('active');
    sliderNo --

    if (sliderNo < 1) {
        sliderNo = sliders.length;
    }

    document.getElementById('slider' + sliderNo).classList.add('active');
}

nextButton.onclick = next
prevButton.onclick = prev

setInterval(next, '4000');

// Product Filter JS
let all_btn = document.getElementById('all-btn');
let cloth_btn = document.getElementById('cloth-btn');
let shoe_btn = document.getElementById('shoe-btn');
let watch_btn = document.getElementById('watch-btn');
let other_btn = document.getElementById('other-btn');


let cloth_cards = document.getElementsByClassName('cloth');
let shoe_cards = document.getElementsByClassName('shoe');
let watch_cards = document.getElementsByClassName('watch');
let other_cards = document.getElementsByClassName('other');

all_btn.onclick = function () {
    for(let cloth_card of cloth_cards) {
        cloth_card.style.display = 'block';
    }
    for(let shoe_card of shoe_cards) {
        shoe_card.style.display = 'block';
    }
    for(let watch_card of watch_cards) {
        watch_card.style.display = 'block';
    }
    for(let other_card of other_cards) {
        other_card.style.display = 'block';
    }

    this.classList.add('active');
    cloth_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
    watch_btn.classList.remove('active');
    other_btn.classList.remove('active');
}

cloth_btn.onclick = function () {
    for(let cloth_card of cloth_cards) {
        cloth_card.style.display = 'block';
    }
    for(let shoe_card of shoe_cards) {
        shoe_card.style.display = 'none';
    }
    for(let watch_card of watch_cards) {
        watch_card.style.display = 'none';
    }
    for(let other_card of other_cards) {
        other_card.style.display = 'none';
    }

    this.classList.add('active');
    all_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
    watch_btn.classList.remove('active');
    other_btn.classList.remove('active');
}

shoe_btn.onclick = function () {
    for(let cloth_card of cloth_cards) {
        cloth_card.style.display = 'none';
    }
    for(let shoe_card of shoe_cards) {
        shoe_card.style.display = 'block';
    }
    for(let watch_card of watch_cards) {
        watch_card.style.display = 'none';
    }
    for(let other_card of other_cards) {
        other_card.style.display = 'none';
    }

    this.classList.add('active');
    all_btn.classList.remove('active');
    cloth_btn.classList.remove('active');
    watch_btn.classList.remove('active');
    other_btn.classList.remove('active');
}

watch_btn.onclick = function () {
    for(let cloth_card of cloth_cards) {
        cloth_card.style.display = 'none';
    }
    for(let shoe_card of shoe_cards) {
        shoe_card.style.display = 'none';
    }
    for(let watch_card of watch_cards) {
        watch_card.style.display = 'block';
    }
    for(let other_card of other_cards) {
        other_card.style.display = 'none';
    }

    this.classList.add('active');
    all_btn.classList.remove('active');
    cloth_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
    other_btn.classList.remove('active');
}

other_btn.onclick = function () {
    for(let cloth_card of cloth_cards) {
        cloth_card.style.display = 'none';
    }
    for(let shoe_card of shoe_cards) {
        shoe_card.style.display = 'none';
    }
    for(let watch_card of watch_cards) {
        watch_card.style.display = 'none';
    }
    for(let other_card of other_cards) {
        other_card.style.display = 'block';
    }

    this.classList.add('active');
    all_btn.classList.remove('active');
    cloth_btn.classList.remove('active');
    shoe_btn.classList.remove('active');
    watch_btn.classList.remove('active');
}

