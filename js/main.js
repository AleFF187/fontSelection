// ! заменить на массив?
// объект со списком шрифтов
fontsList = {
    fontType001: '001_Mason_Chronicles.ttf',
    fontType002: '002_Astoria_Script_Two.ttf'
}

// ! если будет массив, то это не надо
// а надо ли это делать?
let fontsListKeys = Object.keys(fontsList);

// --------------------------------------------------------------------------------

// список кнопок "свернуть"
let hideBtns = getHideButtonsList();
// список кнопок (с номерами шрифтов) для их возврата
let showBtns = getShowButtonsList();
// кнопка "показать все"
let showAllBtn = document.querySelector('.btn__show-all');
// список карточек шрифтов
let fontCards = getFontCardsList();
// список полей вывода образцов шрифтов
let FontExample = getFontExampleList();
// блок вывода номеров свернутых шрифтов
let hiddenFontsButtons = document.querySelector('.hidden-fonts__buttons');

const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');

// --------------------------------------------------------------------------------


// ! а точно нужны эта функции?
// ! а если нужна, то может быть ее сделать одной функцией, передав ей параметры?
// во всем блоке есть приведение nodelist к массиву для возможности манипулирования им
// https://developer.mozilla.org/ru/docs/Web/API/NodeList
// https://overcoder.net/q/832075/%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%BB%D0%B8-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82-%D0%B2-javascript-nodelist 

// получение списка кнопок "свернуть"
function getHideButtonsList() {
    let btns = Array.from(document.querySelectorAll('.btn__hide'));
    return btns;
}

// получение списка карточек шрифтов
function getFontCardsList() {
    let cardsList = Array.from(document.querySelectorAll('.font-card'));
    return cardsList;
}

// получение списка кнопок скрытых шрифтов
function getShowButtonsList() {
    let btns = Array.from(document.querySelectorAll('.btn__show-font'));
    return btns;
}

// получение списка полей вывода шрифтов
function getFontExampleList() {
    let fontExample = Array.from(document.querySelectorAll('.font-card__text'));
    return fontExample;
}

// --------------------------------------------------------------------------------

// обработка нажатия на кнопку "скрыть"

// сделать функцией? что бы можно было вызывать динамически при добавлении шрифта
// тогда надо делать запуск
// setEventOnClick_hideButtons();

for (let i = 0; i < hideBtns.length; i++) {
    hideBtns[i].addEventListener('click', function() {
        // скрываем карточку шрифта, на которой нажали кнопку "скрыть"
        fontCards[i].classList.add('minimize');
        // создаем и размещаем кнопку для возврата шрифта
        let newBtn = document.createElement('button');
        // ! newBtn.innerHTML = '<button class="maximize-btn btn">001</button> ';
        newBtn.classList.add('btn__show-font');
        newBtn.classList.add('btn__common');
        // оставляем только номер шрифта
        newBtn.innerHTML = fontsListKeys[i].substr((length - 3), 3);
        hiddenFontsButtons.appendChild(newBtn);
        // добавляем кнопку в список кнопок возрата шрифта
        showBtns[i] = newBtn;
        // назначаем кнопке действие
        setEventOnClick_showButtons(i);
    });
}

// --------------------------------------------------------------------------------

// обработка нажатия на кнопку возврата шрифта

function setEventOnClick_showButtons(i) {
    showBtns[i].addEventListener('click', function() {
        fontCards[i].classList.remove('minimize');
        hiddenFontsButtons.removeChild(showBtns[i]);
    })
}

// --------------------------------------------------------------------------------

// обработка нажатия на кнопку "показать все"

showAllBtn.onclick = function() {
    for (let i = 0; i < fontCards.length; i++) {
        if (showBtns[i] != undefined) {
            console.log(i, showBtns);
            fontCards[i].classList.remove('minimize');
            //! if (showBtns[i] != undefined) {
            hiddenFontsButtons.removeChild(showBtns[i]);
            // }
        }
    }
}

// --------------------------------------------------------------------------------

// передача текста в карточки шрифтов

form.addEventListener('submit', function(e) {
    for (let i = 0; i < fontCards.length; i++) {
        FontExample[i].innerHTML = formInput.value;
    }
    e.preventDefault();
});

// --------------------------------------------------------------------------------