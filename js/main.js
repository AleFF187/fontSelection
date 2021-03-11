//! объект со списком шрифтов
fontsList = {
    fontType001: '001_Mason_Chronicles.ttf',
    fontType002: '002_Astoria_Script_Two.ttf'
}

//! переделать
let fontsListKeys = Object.keys(fontsList);


// список кнопок "свернуть"
let hideBtns = getHideButtonsList();
// список кнопок (с номерами шрифтов) для их возврата
let showBtns = getShowButtonsList();
// список карточек шрифтов
let fontCards = getFontCardsList();
// блок вывода номеров свернутых шрифтов
let hiddenFontsButtons = document.querySelector('.hidden-fonts__buttons');

// первые запуски функций обработки нажатий
//! зачем?
setEventOnClick_hideButtons();

// !
console.log(showBtns)

// получение списка кнопок "свернуть"
function getHideButtonsList() {
    let btns = document.querySelectorAll('.btn__hide');
    return btns;
}

// получение списка карточек шрифтов
function getFontCardsList() {
    let cardsList = document.querySelectorAll('.font-card');
    return cardsList;
}

// обработка нажатия на кнопку "скрыть"
function setEventOnClick_hideButtons() {
    for (let i = 0; i < hideBtns.length; i++) {
        hideBtns[i].addEventListener('click', function() {
            fontCards[i].classList.add('minimize');
            let newBtn = document.createElement('button');
            //! newBtn.innerHTML = '<button class="maximize-btn btn">001</button> '
            newBtn.classList.add('btn__show-font');
            newBtn.classList.add('btn__common');
            newBtn.innerHTML = fontsListKeys[i];
            hiddenFontsButtons.appendChild(newBtn);
            showBtns = getShowButtonsList();
            //! надо устанавливать обработку на одну кнопку а не на все снова
            //! и список кнопок постоянно растет
            setEventOnClick_showButtons();
            // !
            console.log(showBtns)
        });
    }
}


// получение списка кнопок скрытых шрифтов
function getShowButtonsList() {
    let btns = document.querySelectorAll('.btn__show-font');
    return btns;
}

// обработка нажатия на кнопку возврата конкретного шрифта (с номером)
function setEventOnClick_showButtons() {
    for (let i = 0; i < showBtns.length; i++) {
        showBtns[i].addEventListener('click', function() {
            fontCards[i].classList.remove('minimize');
            showBtns = getShowButtonsList();
            // !
            console.log(showBtns)

        });
    }
}
// let fontCards = document.querySelectorAll('.font-card');
// let minimizedFontsBtns = document.querySelector('.minimized_fonts__buttons');
// let minimizeFontBtn = document.querySelectorAll('.font-card__minimize-btn');
// let maximizeFontBtns;
// // let maximizeFontBtn = document.querySelectorAll('.maximize-btn');
// let maximizeAllFontBtn = document.querySelector('.maximize_all-btn');

// // console.log(fontsListKeys);


// // обработка нажатия кнопки "скрыть" на образце шрифта
// for (let i = 0; i < minimizeFontBtn.length; i++) {
//     minimizeFontBtn[i].addEventListener('click', function() {
//         fontCards[i].classList.add('minimize');
//         let newBtn = document.createElement('button');
//         //! newBtn.innerHTML = '<button class="maximize-btn btn">001</button> '
//         newBtn.classList.add('maximize-btn');
//         newBtn.classList.add('btn');
//         newBtn.innerHTML = fontsListKeys[i];
//         minimizedFontsBtns.appendChild(newBtn);
//         maximizeFontButtonsEvent();
//     })
// }

// function getMaximizeFontButtonsList() {
//     // создаем список кнопок возврата шрифта в видимые
//     maximizeFontBtns = document.querySelectorAll('.maximize-btn');
// }


// function maximizeFontButtonsEvent() {
//     // добавляем кнопкам возврата (шрифта в видимые шрифты) обработку нажатия
//     getMaximizeFontButtonsList();
//     for (let i = 0; i < maximizeFontBtns.length; i++) {
//         maximizeFontBtns[i].addEventListener('click', function() {
//             fontCards[i].classList.remove('minimize');
//         })
//     }
//     console.log(maximizeFontBtns);
// }

// // обработка нажатия кнопки "показать все" и возврат всех шрифтов  на экран
// maximizeAllFontBtn.addEventListener('click', function() {
//     for (let i = 0; i < fontCards.length; i++) {
//         fontCards[i].classList.remove('minimize');
//     }
// })