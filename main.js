const cardContainer = document.querySelector('.card-container');
const searchBar = document.querySelector('#search-bar');



let newCard;

for (i = 0; i < 20; i++) {
    newCard = document.createElement('div');
    newCard.className = "card";
    cardContainer.appendChild(newCard);
};

let categories = ["Family", "Food", "Travel", "You", "Home", "the Past", "the Future", "Shopping", "Sport", "Movies", "Work", "Fashion", "Games", "Music", "School", "Technology", "Transport", "Money", "Childhood", "English", "Pets", "Daily Routine", "Animals", "Addicitons", "Books", "Celebrities", "Friends", "Fears"
]; 

const allCards = document.querySelectorAll('.card'); 

allCards.forEach((card, i) => {
    card.setAttribute('id', categories[i]);
}); 

let images = [];
images[0] = 'img/013-family.svg';
images[1] = 'img/009-fast-food.svg';
images[2] = 'img/018-luggage.svg';
images[3] = 'img/027-care.svg';
images[4] = 'img/003-Home.svg';
images[5] = 'img/012-history.svg';
images[6] = 'img/011-city.svg';
images[7] = 'img/004-shopping-bags.svg';
images[8] = 'img/022-sport.svg';
images[9] = 'img/008-cinema.svg';
images[10] = 'img/023-worktable.svg';
images[11] = 'img/016-suit.svg';
images[12] = 'img/007-game-controller.svg';
images[13] = 'img/006-headphones.svg';
images[14] = 'img/021-education-1.svg';
images[15] = 'img/019-laptop.svg';
images[16] = 'img/026-airport.svg';
images[17] = 'img/001-cash.svg';
images[18] = 'img/024-bouncy-castle.svg';
images[19] = 'img/025-dictionary.svg';


let img;
let text;

allCards.forEach((card, i) => {
    img = document.createElement("img"); 
    img.src = images[i]; 
    img.className = 'images'; 
    card.appendChild(img);
});


allCards.forEach((card, i) => {
    text = document.createElement("p");
    text.className = 'card-text';
    text.innerHTML = categories[i];
    card.appendChild(text);
});


const family = document.querySelector('#Family'); 

const you = document.querySelector('#You');
