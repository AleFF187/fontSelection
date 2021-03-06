let fontsList = {
    "font_type_001": "001_Mason_Chronicles.ttf",
    // "font_type_002": "002_Mason_Chronicles2.ttf"
}

function addFontExample(fontNumber, fontFileName) {
    // создаем блок для представления нового шрифта
    let div = document.createElement('div');
    // присваиваем ему класс с номером шрифта и класс с базовыми стилями
    //! зачем этот класс нужен то?
    div.className = fontNumber + ' ' + 'font_type';
    // выводим текст 
    //! пока название шрифта, заменить на текст пользователя
    div.innerHTML = 'fonts\\' + fontFileName;
    // вставляем элемент в разметку
    document.body.append(div);
    // загружаем шрифт
    loadFonts(fontNumber, fontFileName);
};

//! а если ошибка во время загрузки? например, нет такого шрифта?
async function loadFonts(fontName, fontFileName) {
    // c https://developer.mozilla.org/en-US/docs/Web/API/FontFace/FontFace
    let font = new FontFace(fontName, `url(${fontFileName})`);
    // wait for font to be loaded
    //
    await font.load();
    // add font to document
    document.fonts.add(font);
    // enable font with CSS class
    document.body.classList.add('fonts-loaded');
}


for (key in fontsList) {
    addFontExample(key, fontsList[key]);
}


// const newStyle = document.createElement('style');
// newStyle.appendChild(document.createTextNode("\
// @font-face {\
//     font-family: " + yourFontName + ";\
//     src: url('" + yourFontURL + "') format('yourFontFormat');\
// }\
// "));

// document.head.appendChild(newStyle);