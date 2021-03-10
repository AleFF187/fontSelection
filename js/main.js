//! объект со списком шрифтов
fontsList = {
        fontType001: '001_Mason_Chronicles.ttf',
        fontType002: '002_Astoria_Script_Two.ttf'
    }
    //! переделать
let fontsListKeys = Object.keys(fontsList);


let fontCards = document.querySelectorAll('.font-card');
let minimizedFonts = document.querySelector('.minimized_fonts');
let minimizeFontBtn = document.querySelectorAll('.font-card__minimize-btn');
let maximizeFontBtn = document.querySelectorAll('.maximize-btn');
let maximizeAllFontBtn = document.querySelector('.maximize_all-btn');

// console.log(fontsListKeys);


// обработка нажатия кнопки "скрыть" на образце шрифта
for (let i = 0; i < minimizeFontBtn.length; i++) {
    minimizeFontBtn[i].addEventListener('click', function() {
        fontCards[i].classList.add('minimize');
        let newBtn = document.createElement('button');
        // let newBtn = document.createElement('div');
        // newBtn.innerHTML = '<button class="maximize-btn btn">001</button> '
        newBtn.classList.add('maximize-btn');
        newBtn.classList.add('btn');
        //! переделать
        newBtn.innerHTML = fontsListKeys[i];
        minimizedFonts.appendChild(newBtn);

        //! еще надо как то ослеживать добавленные кнопки
        //! может быть надо сделать под них массив или же искать их на лету?
    })
}

// обработка нажатия кнопки с номером шрифта в списке скрытых и возврат его на экран
for (let i = 0; i < maximizeFontBtn.length; i++) {
    maximizeFontBtn[i].addEventListener('click', function() {
        fontCards[i].classList.remove('minimize');
    })
}

// обработка нажатия кнопки "показать все" и возврат всех шрифтов  на экран
maximizeAllFontBtn.addEventListener('click', function() {
    for (let i = 0; i < fontCards.length; i++) {
        fontCards[i].classList.remove('minimize');
    }
})