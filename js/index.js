const image = document.querySelectorAll(".img");
let flippedCards = [];

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
]

shuffle(cardList);
console.log(cardList);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

image.forEach((element) => {
    element.addEventListener("click", flipCard);
});


function flipCard(event) {
    return
};
