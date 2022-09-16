const image = document.querySelectorAll(".img");
let flippedCards = [];

const array = [1, 1, 2, 2, 3, 3];
shuffle(array);
console.log(array);

const card1 = array[0];
const card2 = array[1];
const card3 = array[2];
const card4 = array[3];
const card5 = array[4];
const card6 = array[5];

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
    if (flippedCards.length > 2) {
        image.forEach((element) => {
            element.classList.remove("turned-1");
            element.classList.remove("turned-2");
            element.classList.remove("turned-3");
            element.classList.add("img");
            flippedCards = [];
        });
    };

    if (flippedCards.length > 1) {
        if (flippedCards[0] === flippedCards[1]) {

        };
    };

    image.forEach((element, index) => {
        element.classList.toggle("turned-" + array[index]);
        element.classList.toggle("img");
    });
};
