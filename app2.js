document.addEventListener('DOMContentLoaded',createGameBoard);           
const cardArray = [
    {
        name: "condemn",
        image: "images/condemn.png" },
    {
        name: "condemn",
        image: "images/condemn.png" },
    {
        name: "flurry",
        image: "images/flurry.png" },
    {
        name: "flurry",
        image: "images/flurry.png" },
    {
        name: "kindling",
        image: "images/kindling.png" },
    {
        name: "kindling",
        image: "images/kindling.png" },
    {
        name: "pride",
        image: "images/pride.png" },
    {
        name: "pride",
        image: "images/pride.png" },
    {
        name: "sunwell",
        image: "images/sunwell.png" },
    {
        name: "sunwell",
        image: "images/sunwell.png" },
    {
        name: "tavish",
        image: "images/tavish.png" },
    {
        name: "tavish",
        image: "images/tavish.png" },
        {
            name: "StardustDragon",
            image: "images/StardustDragon.png" },
        {
            name: "StardustDragon",
            image: "images/StardustDragon.png" },
        {
            name: "Berserker",
            image: "images/Berserker.png" },
        {
            name: "Berserker",
            image: "images/Berserker.png" },
        {
            name: "Duel",
            image: "images/Duel.png" },
        {
            name: "Duel",
            image: "images/Duel.png" },
        {
            name: "RallyingBlade",
            image: "images/RallyingBlade.png" },
        {
            name: "RallyingBlade",
            image: "images/RallyingBlade.png" },
        {
            name: "Zephrys",
            image: "images/Zephrys.png" },
        {
            name: "Zephrys",
            image: "images/Zephrys.png" },
        {
            name: "IronbarkProtector",
            image: "images/IronbarkProtector.png" },
        {
            name: "IronbarkProtector",
            image: "images/IronbarkProtector.png" }
]

function createGameBoard() {

    let gameboard = document.getElementById('gameBoard'); //ค่า Element จาก ID gameBoard 

    let gridContainer = document.createElement('div'); //สร้าง div เก็บใน gridContainer
    gridContainer.className = 'grid';

    for(let i=0;i <24; i++){ 
        item = document.createElement('div');
        item.className = 'item';

        let card = document.createElement('img');
        card.setAttribute('src','images/card_back.png');
        card.setAttribute('id',i);
        card.setAttribute('class','img');
        card.style.width="70px";

        card.addEventListener('click',flipCard); //เมื่อ click เรียก flipcard

        item.appendChild(card); //เอาขวามาใส่ซ้าย
        gridContainer.appendChild(item);
    }
    gameboard.appendChild(gridContainer);
    
    cardArray.sort(() => 0.5 - Math.random()); 
}

cardChoosen = [] 
let cardChoosenId = []
let score=0

NumC=0;
function flipCard() {
    soundClick=document.getElementById('soundClick');
    soundClick.play();

    NumC=NumC+1;
    document.getElementById('NumClick').textContent=NumC;

    let cardId = this.getAttribute('id'); 
    this.setAttribute('src',cardArray[cardId].image);
    cardChoosen.push(cardArray[cardId]);  
    cardChoosenId.push(cardId); 
    if(cardChoosen.length === 2){ 
        document.getElementById('gameConsole').textContent = "Checking...";
        setTimeout(checkForMatch,500); 
    }
}

// CardNone=0;
function checkForMatch() { 
    const cards = document.querySelectorAll('.img');

    let selectedCardOne = cardChoosenId[0]; //7
    let selectedCardTwo = cardChoosenId[1]; //10

    let consoleMessage = "";
    
    // && cardChoosen[0].getAttribute('id').value !== cardChoosen[1].getAttribute('id').value
    // && cards[selectedCardOne].getAttribute('id') !== cards[selectedCardTwo].getAttribute('id') 
    if(cardChoosen[0].name == cardChoosen[1].name && cardChoosenId[0]!==cardChoosenId[1]){ 
        cards[selectedCardTwo].style.display = "none";
        cards[selectedCardOne].style.display = "none";
        score = score + 1;
        consoleMessage = "Your found a match";
    }else{
        cards[selectedCardTwo].setAttribute('src','images/card_back.png');
        cards[selectedCardOne].setAttribute('src','images/card_back.png');
        consoleMessage = "Sorry, try again...:(";
    }
    // else if(cardChoosen[0].name !== cardChoosen[1].name || cardChoosen[0].getAttribute('id').value == cardChoosen[1].getAttribute('id').value)

    document.getElementById('gameScore').textContent = score;
    document.getElementById('gameConsole').textContent = consoleMessage;

    cardChoosen = [];
    cardChoosenId = [];

    if (score === cardArray.length / 2) { 
        document.getElementById('gameConsole').textContent = "Congratulations!";


        let textWin=document.createElement('h1');
        textWin.style.fontSize="80px"
        textWin.innerHTML="YOU WIN!!!";

        item.appendChild(textWin);
    }
}
