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

let inStock = false;
let infoText = document.getElementById("bookInformation");

//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="books" id="LoTR" onclick ="selectBook('LoTR')">Lord of the Rings</div>
    <br/>
    <div class="books" id="forthWing" onclick ="selectBook('forthWing')">Forth Wing</div>
    <br/>
    <div class="books" id="beDisliked" onclick ="selectBook('beDisliked')">The Courage to be Disliked</div>
    <br/>
    <div class="books" id="wheelOfTime" onclick ="selectBook('wheelOfTime')">Wheel of Time</div>
    <br/>
    <div class="books" id="eragon" onclick ="selectBook('eragon')">Eragon</div>
    <br/>
    <button onclick="bookChecks()">more information on the book!</button>
    <br/>
    <br/>
    <div id="bookInformation"></div>    



    `;
}

//Control
function selectBook(id) {
    // en funksjon hvor du klikker på en bok og velder denne, gir det en border eller annen bakgrunn eller noe. 
    //utfra om instock er true eller false vil det printe ut en annen text. 
    // ellers vil all infoen om hver bok printes uansett.
    document.getElementById(id).classList.add("border");

    updateView()
}

function checkAvailible(id) {
    (inStock = !inStock)
    if (id.inStock = true) {
        infoText = '';
    }
}

function bookChecks() {
    infoText.innerHTML = /*HTML*/ `
        <div>${LoTR.title}</div>
            <li>${LoTR.inStock}</li>
        <br/>
        <div>${forthWing.title}</div>
            <li>${forthWing.inStock}</li>
        <br/>
        <div>${beDisliked.title}</div>
            <li>${beDisliked.inStock}</li>
        <br/>
        <div>${wheelOfTime.title}</div>
            <li>${wheelOfTime.inStock}</li>
        <br/>
        <div>${eragon.title}</div>
            <li>${eragon.inStock}</li>
        <br/>
    `;
}