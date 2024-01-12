// Navigation Bar JS
let searchInput = document.getElementById('search-input');
let iconItems = document.getElementsByClassName('icon-item');

searchInput.onfocus =function() {
    for (let item of iconItems) {
        item.style.display = 'none'
    }
    this.style.width ='100%'
}

searchInput.onblur =function() {
    for (let item of iconItems) {
        item.style.display = 'block'
    }
    this.style.width ='65px'
}

let nav = document.getElementById('nav');

window.onscroll = function () {
    if(window.pageYOffset > 500) {
        nav.classList.add('bg')
    } else {
        nav.classList.remove('bg')
    }
}

let hamburgerMenu = document.getElementById('hamburger-menu');
let hiddenMenu = document.getElementById('navbar-menu');
hamburgerMenu.onclick = function () {
    hiddenMenu.classList.toggle('active');

    if(this.innerHTML== '<i class="fa-solid fa-bars"></i>') {
        this.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        this.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}


let goTop = document.getElementById('gototop');

window.onscroll = function () {

    console.log(window.pageYOffset)
    let goTop = document.getElementById('gototop');

    if (window.pageYOffset > 100) {
        goTop.classList.add('active');
    } else {
        goTop.classList.remove('active');
    }

    
}