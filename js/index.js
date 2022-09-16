const image = document.querySelectorAll(".img");
const card1 = image[0];
const card2 = image[1];
const card3 = image[2];
const card4 = image[3];
const card5 = image[4];
const card6 = image[5];

const array = [1, 1, 2, 2, 3, 3];
shuffle(array);
console.log(array);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

image.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        element.classList.toggle("turned-" + array[index]);
        element.classList.toggle("img");
        event.stopPropagation();
    })
});
