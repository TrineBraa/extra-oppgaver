// Er'n på lager??:
// Lag et objekt for en bok, som har disse propertiene:

// let book = {
// title: "",
// author: "",
// year: null,
// inStock: true
// }


// Lag et par forskjellige bøker.

// Lag så en funksjon som tar inn en bok som parameter og gir deg svar på om boken er tilgjengelig eller ikke



//Modell


let LoTR = {
    title: 'Lord of The Rings',
    autor: 'J.R.R. Tolkien',
    year: '1954',
    inStock: true
}

let forthWing = {
    title: 'Forth Wing',
    autor: 'Rebecca Yarros',
    year: '2023',
    inStock: false
}

let beDisliked = {
    title: 'The Courage to be Disliked',
    autor: 'Ichiro Kishimi & Fumitake Koga',
    year: '2013',
    inStock: true
}

let wheelOfTime = {
    title: 'The Wheel of Time: The Great Hunt',
    autor: 'Robert Jordan',
    year: '1990',
    inStock: false
}

let eragon = {
    title: 'Eragon',
    autor: 'Christopher Paolini',
    year: '2002',
    inStock: false
}

let bookList = [LoTR, forthWing, beDisliked, wheelOfTime, eragon]

let chosenBook = 1;

//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${printBookTitles()}
    <br/>
    <button onclick="printSelectedBookInfo()">more information on the book!</button>
    <br/>
    <br/>
    ${showInfo()}
    `;
}

//Control

function selectBook(id) {
    chosenBook = id;
    updateView()
}


function printBookTitles() {
    let result = '';
    for (i = 0; i < bookList.length; i++) {
        if (i == chosenBook) {
            result += `<div class="books border" onclick="selectBook(${i})">${bookList[i].title}</div>`;
        } else {
            result += `<div class="books" onclick="selectBook(${i})">${bookList[i].title}</div>`;
        }

    }
    console.log(result)
    return result
}


function showInfo() {
    let bookInfo = /*HTML*/`
        <div>Title: ${bookList[chosenBook].title}</div>
        <div>Autor: ${bookList[chosenBook].autor}</div>
        <div>Release: ${bookList[chosenBook].year}</div>
        <div>availible: ${bookList[chosenBook].inStock}</div>
   `;
    return bookInfo
}

// function removeBorder() {
//     document.getElementById("LoTR").classList.remove("border");
//     document.getElementById("forthWing").classList.remove("border");
//     document.getElementById("beDisliked").classList.remove("border");
//     document.getElementById("wheelOfTime").classList.remove("border");
//     document.getElementById("eragon").classList.remove("border");
// }

// function printSelectedBookInfo() {
//     infoText.innerHTML = /*HTML*/`
//     <div>${chosenBook.title}</div>
//     `;
// }