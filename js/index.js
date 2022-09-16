// Init Variables

const image = document.querySelectorAll(".img");
const cardsDiv = document.querySelector(".cards-div");

let flippedCards = [];
let pickedCards = [];
let pickedCardsId = [];

const cardList = [
    {
        name: "JS",
        image: "images/logo-js"
    },

    {
        name: "JS",
        image: "images/logo-js"
    },

    {
        name: "php",
        image: "images/logo-php"
    },

    {
        name: "php",
        image: "images/logo-php"
    },

    {
        name: "py",
        image: "images/logo-py"
    },

    {
        name: "py",
        image: "images/logo-py"
    }
];

// Functions

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

const initBoard = () => {
    for (let i = 0; i < cardList.length; i++) {
        let card = document.createElement("img");
        card.setAttribute("src", "images/card.png");
        card.setAttribute("id", i);
        card.classList.add("img");
        card.addEventListener("click", flipCard);
        cardsDiv.appendChild(card);
    }
};

image.forEach((element) => {
    element.addEventListener("click", flipCard);
});


const flipCard = (event) => {
    return
};

// Main Script

initBoard();

shuffle(cardList);
console.log(cardList);
