let fontCards = document.querySelectorAll('.font-card');
let minimizeFontBtn = document.querySelectorAll('.font-card__minimize-btn');
let maximizeFontBtn = document.querySelectorAll('.maximize-btn');
let maximizeAllFontBtn = document.querySelector('.maximize_all-btn');
// console.log(maximizeAllFontBtn);


for (let i = 0; i < minimizeFontBtn.length; i++) {
    minimizeFontBtn[i].addEventListener('click', function() {
        fontCards[i].classList.add('minimize');
    })
}

for (let i = 0; i < maximizeFontBtn.length; i++) {
    maximizeFontBtn[i].addEventListener('click', function() {
        fontCards[i].classList.remove('minimize');
    })
}


maximizeAllFontBtn.addEventListener('click', function() {
    for (let i = 0; i < fontCards.length; i++) {
        fontCards[i].classList.remove('minimize');
    }
})

// maximizeAllFontBtn.onclick = function() {