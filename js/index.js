// Init Variables

const image = document.querySelectorAll(".img");
const cardsDiv = document.querySelector(".cards-div");
const scoreSpan = document.querySelector(".score");

let flippedCards = [];
let pickedCards = [];
let pickedCardsId = [];
let score = 0;

const cardList = [
    {
        name: "JS",
        image: "images/logo-js.png"
    },

    {
        name: "JS",
        image: "images/logo-js.png"
    },

    {
        name: "php",
        image: "images/logo-php.png"
    },

    {
        name: "php",
        image: "images/logo-php.png"
    },

    {
        name: "py",
        image: "images/logo-py.png"
    },

    {
        name: "py",
        image: "images/logo-py.png"
    }
];

// Functions

//shuffle array function //copied online
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

//Will initialize the board with images inside the div
function initBoard() {
    for (let i = 0; i < cardList.length; i++) {
        let card = document.createElement("img");
        card.setAttribute("src", "images/card.png");
        card.setAttribute("id", i);
        card.classList.add("img");
        card.addEventListener("click", flipCard);
        cardsDiv.appendChild(card);
    }
};

//Flips card
function flipCard() {
    if(pickedCards !=  2) {
        let cardId = this.getAttribute("id");

        if(this.getAttribute("src") != "images/empty.png") {
            pickedCards.push(cardList[cardId].name);
            pickedCardsId.push(cardId);
            this.setAttribute("src", cardList[cardId].image);

            if(pickedCards.length == 2) {
                setTimeout(checkMatch, 600);
            };
        };
    };
};

//Checks cards for match
function checkMatch() {
    let firstCard = pickedCardsId[0];
    let secondCard = pickedCardsId[1];
    let cards = document.querySelectorAll("img");

    if(pickedCards[0] == pickedCards[1]) {
        cards[firstCard].setAttribute("src", "images/empty.png");
        cards[secondCard].setAttribute("src", "images/empty.png");
        score += 10;
    } else {
        cards[firstCard].setAttribute("src", "images/card.png");
        cards[secondCard].setAttribute("src", "images/card.png");
        score -= 5;
    };

    scoreSpan.textContent = score;
    pickedCards = [];
    pickedCardsId = [];
};

// Main Script

//Wait for window to load
addEventListener('load', () => {
    shuffle(cardList);
    initBoard();
});
