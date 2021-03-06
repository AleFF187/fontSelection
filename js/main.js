// let requestURL = '../fonts/fonts.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//     var superHeroes = request.response; //     
//     console.log(superHeroes);
// }

let fontsList = {
    "font_type_001": "001_Mason_Chronicles.ttf",
    "font_type_002": "002_Mason_Chronicles2.ttf"
}

function addFontInLayout(fontType, fontName) {
    let div = document.createElement('div');
    div.className = fontType + ' ' + 'font_type';
    div.innerHTML = fontName;
    document.body.append(div);
};

for (key in fontsList) {
    addFontInLayout(key, fontsList[key]);
}