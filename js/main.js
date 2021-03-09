let fontCards = document.querySelectorAll('.font-card');
let cardResize = document.querySelectorAll('.font-card__resize');

for (let i = 0; i < cardResize.length; i++) {
    cardResize[i].addEventListener('click', function() {
        if (fontCards[i].classList.contains('minimize')) {
            fontCards[i].classList.remove('minimize');
            cardResize[i].innerHTML = 'Скрыть';
        } else {
            fontCards[i].classList.add('minimize');
            cardResize[i].innerHTML = 'Показать';
        }
    })
}