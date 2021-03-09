let fontCards = document.querySelectorAll('.font-card');
let minimizeFontBtn = document.querySelectorAll('.font-card__minimize-button');
let maximizeFontBtn = document.querySelectorAll('.font-number__maximize-button');


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