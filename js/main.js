//! объект со списком шрифтов
fontsList = {
    fontType001: '001_Mason_Chronicles.ttf',
    fontType002: '002_Astoria_Script_Two.ttf'
}

//! переделать
let fontsListKeys = Object.keys(fontsList);




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