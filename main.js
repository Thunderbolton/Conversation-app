const cardContainer = document.querySelector('.card-container');
const searchBar = document.querySelector('#search-bar');


// Create cards
let newCard;
for (i = 0; i < 95; i++) {
    newCard = document.createElement('div');
    newCard.className = "card";
    cardContainer.appendChild(newCard);
};

// Create question categories
let categories = ["Family", "Food", "Travel", "You", "Home", "Past", "Future", "Shopping", "Sport", "Movies", "Work", "Fashion", "Games", "Music", "School", "Technology", "Transport", "Money", "Childhood", "English", "Pets", "DailyRoutine", "Animals", "Friends", "Books", "Dreams", "Restaurants", "Weather", "Countries", "Experiences", "Addictions", "Adventure", "Advertising", "Aliens", "Art", "Boredom", "Cars", "Celebrities", "Change", "Competition", "Crime", "Driving", "Fitness", "Gambling", "Gardening", "Gossip", "Fears", "Hangovers", "Health", "History", "Internet", "Interviews", "JunkFood", "Lies", "Magic", "Marathons", "Marriage", "Museums", "Nature", "Neighbours", "OldAge", "Olympics", "Police", "Recycling", "Retirement", "Science", "Safety", "SocialMedia", "Souvenirs", "Stress", "Superstitions", "Tourism", "Websites", "Weddings", "AnimalRights", "CorporateResponsibility", "CosmeticSurgery", "Deforestation", "DigitalRevolution", "Discrimination", "EndangeredSpecies", "Euthanasia", "Globalisation", "Government", "GunControl", "Immigration", "Minimalism","Multiculturalism", "Mysteries", "NaturalDisasters", "Patience", "Philosophy", "Protests", "Sustainability", "Xenophobia"
]; 

// Assign each category its corresponding id 
const allCards = document.querySelectorAll('.card'); 
allCards.forEach((card, i) => {
    card.setAttribute('id', categories[i]);
}); 

// Add category images
let images = [];
images[0] = 'img/013-family.svg';
images[1] = 'img/009-fast-food.svg';
images[2] = 'img/018-luggage.svg';
images[3] = 'img/027-care.svg';
images[4] = 'img/003-home.svg';
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
images[20] = 'img/002-pets.svg';
images[21] = 'img/005-daily-routine.svg';
images[22] = 'img/010-animals.svg';
images[23] = 'img/014-friends.svg';
images[24] = 'img/028-books.svg';
images[25] = 'img/015-dreams.svg';
images[26] = 'img/017-restaurants.svg';
images[27] = 'img/020-weather.svg';
images[28] = 'img/031-countries.svg';
images[29] = 'img/042-experiences.svg';
images[30] = 'img/056-addictions.svg';
images[31] = 'img/032-adventure.svg';
images[32] = 'img/033-advertising.svg';
images[33] = 'img/034-alien.svg';
images[34] = 'img/035-art.svg';
images[35] = 'img/036-boredom.svg';
images[36] = 'img/037-cars.svg';
images[37] = 'img/057-celebrities.svg';
images[38] = 'img/038-change.svg';
images[39] = 'img/039-competition.svg';
images[40] = 'img/040-crime.svg';
images[41] = 'img/041-driving.svg';
images[42] = 'img/043-fitness.svg';
images[43] = 'img/044-gambling.svg';
images[44] = 'img/045-gardening.svg';
images[45] = 'img/046-gossip.svg';
images[46] = 'img/047-fears.svg';
images[47] = 'img/076-hangovers.svg';
images[48] = 'img/048-health.svg';
images[49] = 'img/049-history.svg';
images[50] = 'img/050-internet.svg';
images[51] = 'img/051-interviews.svg';
images[52] = 'img/052-junk-food.svg';
images[53] = 'img/053-lies.svg';
images[54] = 'img/054-magic.svg';
images[55] = 'img/058-marathons.svg';
images[56] = 'img/055-marriage.svg';
images[57] = 'img/059-museums.svg';
images[58] = 'img/061-nature.svg';
images[59] = 'img/062-neighbours.svg' ;
images[60] = 'img/060-old-age.svg';
images[61] = 'img/063-olympics.svg';
images[62] = 'img/064-police.svg';
images[63] = 'img/065-recycling.svg';
images[64] = 'img/066-retirement.svg';
images[65] = 'img/067-science.svg';
images[66] = 'img/068-safety.svg';
images[67] = 'img/069-social-media.svg';
images[68] = 'img/070-souvenirs.svg';
images[69] = 'img/071-stress.svg';
images[70] = 'img/072-superstitions.svg';
images[71] = 'img/073-tourism.svg';
images[72] = 'img/074-websites.svg';
images[73] = 'img/075-weddings.svg';
images[74] = 'img/108-animal-rights.svg';
images[75] = 'img/090-corporate-responsibility.svg';
images[76] = 'img/091-cosmetic-surgery.svg';
images[77] = 'img/109-deforestation.svg';
images[78] = 'img/092-digital-revolution.svg';
images[79] = 'img/093-discrimination.svg';
images[80] = 'img/094-endangered-species.svg';
images[81] = 'img/095-euthanasia.svg';
images[82] = 'img/096-globalisation.svg';
images[83] = 'img/097-government.svg';
images[84] = 'img/098-gun-control.svg';
images[85] = 'img/099-immigration.svg';
images[86] = 'img/110-minimalism.svg';
images[87] = 'img/100-multiculturalism.svg';
images[88] = 'img/101-mysteries.svg';
images[89] = 'img/102-natural-disasters.svg';
images[90] = 'img/103-patience.svg';
images[91] = 'img/104-philosophy.svg';
images[92] = 'img/105-protests.svg';
images[93] = 'img/106-sustainable-development.svg';
images[94] = 'img/107-xenophobia.svg';
images[95] = 'img/108-animal-rights.svg';
images[96] = 'img/109-deforestation.svg';
images[97] = 'img/110-minimalism.svg';


// add image and text headers to each card
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
    text.className = 'card-header';
    text.innerHTML = categories[i];
    card.appendChild(text);
});


// add a <p> element to each card which will contain all questions 
let newPara;

allCards.forEach((card) => {
    newPara = document.createElement('p');
    newPara.className = "card-questions";
    newPara.classList.add("hide-questions");
    card.appendChild(newPara);
});


const past = document.querySelector('#Past');
past.children[1].textContent = 'the Past';

const future = document.querySelector('#Future');
future.children[1].textContent = 'the Future';

const dailyRoutine = document.querySelector('#DailyRoutine');
dailyRoutine.children[1].textContent = 'Daily Routine';

const junkFood = document.querySelector('#JunkFood');
junkFood.children[1].textContent = 'Junk Food';

const oldAge = document.querySelector('#OldAge');
oldAge.children[1].textContent = 'Old Age';

const socialMedia = document.querySelector('#SocialMedia');
socialMedia.children[1].textContent = 'Social Media';

const corporateResponsibility = document.querySelector('#CorporateResponsibility');
corporateResponsibility.children[1].textContent = 'Corporate Responsibility'

const cosmeticSurgery = document.querySelector('#CosmeticSurgery');
cosmeticSurgery.children[1].textContent = 'Cosmetic Surgery';

const digitalRevolution = document.querySelector('#DigitalRevolution');
digitalRevolution.children[1].textContent = 'Digital Revolution';

const endangeredSpecies = document.querySelector('#EndangeredSpecies');
endangeredSpecies.children[1].textContent = 'Endangered Species';

const gunControl = document.querySelector('#GunControl');
gunControl.children[1].textContent = 'Gun Control';

const naturalDisasters = document.querySelector('#NaturalDisasters');
naturalDisasters.children[1].textContent = 'Natural Disasters';

const animalRights = document.querySelector('#AnimalRights');
animalRights.children[1].textContent = 'Animal Rights';



// Function for toggling the enlarge classes and questions. 
function toggleClasses(e) {
    e.currentTarget.classList.toggle("enlarge"); // enlarge the card
    e.currentTarget.children[0].classList.toggle("enlarge-image");
    e.currentTarget.children[1].classList.toggle("enlarge-font"); // for card title text
    e.currentTarget.children[2].classList.toggle("hide-questions");
}

allCards.forEach((card) => {
    card.addEventListener('click', toggleClasses);
});


// Questions' contents (added as separated lists in each card)

// Family 
const familyQ = ["How many people are there in your family?", "Do you prefer spending time with your family or friends?", "What do your parents do?", "Who is the laziest person in your family?", "Would you like to have your own family?"];
const familyRes = familyQ.join('<br>');
const family1 = document.querySelector("#Family > p:nth-child(3)").innerHTML = familyRes;

// Food
const foodQ = ["What's your favourite food? How often do you eat it?", "How often do you eat in a restaurant?", "What's the strangest food you have ever eaten?", "What are the most popular dishes in your country?", "Are there any foods you dislike?"];
const foodRes = foodQ.join('<br>');
const food1 = document.querySelector("#Food > p:nth-child(3)").innerHTML = foodRes;

// Travel
const travelQ = ["Have you ever been to any foreign countries? Where?", "What’s the best place you’ve ever been to?", "How often do you go on holiday?", "What is your favourite city?", "Where do you like to travel in your own country?"];
const travelRes = travelQ.join('<br>');
const travel1 = document.querySelector("#Travel > p:nth-child(3)").innerHTML = travelRes;

// You
const youQ = ["What do you do?", "What are your hobbies and interests?", "What do you like to do in your free time?", "What do you like doing in the evenings?", "What time do you usually sleep/wake up?"];
const youRes = youQ.join('<br>');
const you1 = document.querySelector("#You > p:nth-child(3)").innerHTML = youRes;

// Home
const homeQ = ["What’s your favourite thing about your home?", "How many rooms are there in your house?", "How many times have you moved house?", "Do you like being at home alone?", "Would you like to work at home?"];
const homeRes = homeQ.join('<br>');
const home1 = document.querySelector("#Home > p:nth-child(3)").innerHTML = homeRes;

// Past
const pastQ = ["What did you do yesterday?", "What was the last thing you ate?", "How was your last birthday? Did you have a party?", "What is your earliest memory?", "Do you think the past was better than the present? Why or why not?"];
const pastRes = pastQ.join('<br>');
const past1 = document.querySelector("#Past > p:nth-child(3)").innerHTML = pastRes;

// Future
const futureQ = ["What are you going to do tomorrow?", "What kind of job would you like to do in the future?", "How do you think your country will change in the future?", "Do you think robots will replace humans?", "Would you like to live on another planet?"];
const futureRes = futureQ.join('<br>');
const future1 = document.querySelector("#Future > p:nth-child(3)").innerHTML = futureRes;

// Shopping
const shoppingQ = ["How often do you go shopping?", "What was the last thing you bought?", "Do you enjoy shopping online?", "Do you like to go shopping alone or with friends?", "How important is customer service when you are shopping?"];
const shoppingRes = shoppingQ.join('<br>');
const shopping1 = document.querySelector("#Shopping > p:nth-child(3)").innerHTML = shoppingRes;

// Sport
const sportQ = ["What’s your favourite sport?", "Do you prefer playing or watching sports?", "Which sports are popular in your country?", "Have you ever won a medal in a sports competition?", "Who is your favourite sports star?"];
const sportRes = sportQ.join('<br>');
const sport1 = document.querySelector("#Sport > p:nth-child(3)").innerHTML = sportRes;

// Movies 
const moviesQ = ["What is your favorite movie?", "Are there any kinds of movies you dislike?", "Which country makes the best movies?", "What’s the worst movie you’ve ever seen?", "How often do you go to the cinema?"];
const moviesRes = moviesQ.join('<br>');
const movies1 = document.querySelector("#Movies > p:nth-child(3)").innerHTML = moviesRes;

// Work
const workQ = ["What do you do/want to do for work?", "Would you like to have your own business?", "What jobs do your parents have?", "Would you like to work in another country?", "Do people work long hours in your country?"];
const workRes = workQ.join('<br>');
const work1 = document.querySelector("#Work > p:nth-child(3)").innerHTML = workRes;

// Fashion
const fashionQ = ["How important is fashion to you?", "What are your favourite fashion brands?", "What do you think of designer fashion?", "What do you think is the best decade / era for fashion?", "What's the most expensive piece of clothing you have ever bought?"];
const fashionRes = fashionQ.join('<br>');
const fashion1 = document.querySelector("#Fashion > p:nth-child(3)").innerHTML = fashionRes;

// Games
const gamesQ = ["What kind of video games do you like?", "Which game are you best at?", "Do you like playing games online?", "Are video games good for relieving stress?", "How can you help someone who is addicted to video games?"];
const gamesRes = gamesQ.join('<br>');
const games1 = document.querySelector("#Games > p:nth-child(3)").innerHTML = gamesRes;

// Music
const musicQ = ["What kind of music do you like?", "Can you play any instruments?", "Do you like to sing?", "Have you ever been to a concert?", "What would life be like without music?"];
const musicRes = musicQ.join('<br>');
const music1 = document.querySelector("#Music > p:nth-child(3)").innerHTML = musicRes;

// School
const schoolQ = ["What's your favourite subject at school?", "What school clubs do/did you belong to?", "Do/did you like your school uniform?", "What’s the most important thing you learnt at school?", "Have you ever been punished at school?"];
const schoolRes = schoolQ.join('<br>');
const school1 = document.querySelector("#School > p:nth-child(3)").innerHTML = schoolRes;

// Technology
const technologyQ = ["What do you think of today’s technology?", "Do you enjoy reading about technology?", "What new technology could you not live without?", "Do you think we’ve become obsessed with technology?", "In your opinion,what is the greatest technological invention?"];
const technologyRes = technologyQ.join('<br>');
const technology1 = document.querySelector("#Technology > p:nth-child(3)").innerHTML = technologyRes;

// Transport
const transportQ = ["How do you get to work/school?", "Do you like to drive?", "How many kinds of transport have you used?", "What do you think is the safest type of transport? Most dangerous?", "How often do you use public transportation?"];
const transportRes = transportQ.join('<br>');
const transport1 = document.querySelector("#Transport > p:nth-child(3)").innerHTML = transportRes;

// Money
const moneyQ = ["Are you good at saving money?", "Is it important to you to have a lot of money?", "How often do you think about money?", "Have you ever raised money for charity?", "Can money buy happiness?"];
const moneyRes = moneyQ.join('<br>');
const money1 = document.querySelector("#Money > p:nth-child(3)").innerHTML = moneyRes;

// Childhood 
const childhoodQ = ["What did you like to do when you were a child?", "What was the best thing about your childhood?", "Do you remember anything about your personality when a child?", "What about your childhood do you wish you could change?", "Growing up did you have a childhood hero?"];
const childhoodRes = childhoodQ.join('<br>');
const childhood1 = document.querySelector("#Childhood > p:nth-child(3)").innerHTML = childhoodRes;

// English
const englishQ = ["Why are you studying English?", "What do you find difficult about learning English?", "How happy are you with your English level?", "Have you visited an English-speaking country before?", "Has English improved your life?"];
const englishRes = englishQ.join('<br>');
const english1 = document.querySelector("#English > p:nth-child(3)").innerHTML = englishRes;

// Pets
const petsQ = ["Do you have any pets?", "What are the pros and cons of owning a pet?", "Do you like visiting pet shops?", "Do you know anyone with an unusual pet?", "Do you think it's important for a child to own a pet?"];
const petsRes = petsQ.join('<br>');
const pets1 = document.querySelector("#Pets > p:nth-child(3)").innerHTML = petsRes;

// Daily Routine
const dailyQ = ["What time do you usually wake up?", "What is the first thing you do after waking up?", "What do you usually eat for breakfast?", "What time do you leave for work/school?", "What time do you normally return home?", "What time do you usually sleep?", "What is your favourite time of the day?"];
const dailyRes = dailyQ.join('<br>');
const daily1 = document.querySelector("#DailyRoutine > p:nth-child(3)").innerHTML = dailyRes;

// Animals
const animalsQ = ["What is your favourite animal?", "What is the biggest animal you have ever seen?", "How often do you go to the zoo?", "Which animal do you think is the most dangerous? Are there any dangerous animals in your country?", "Would you like to be reincarnated as an animal?"];
const animalsRes = animalsQ.join('<br>');
const animals1 = document.querySelector("#Animals > p:nth-child(3)").innerHTML = animalsRes;

// Friends
const friendsQ = ["Do you have a best friend?", "How often do you talk with your friends?", "Do you find it easy to make new friends?", "Do you ever worry about losing your friends?", "Has a friend ever let you down?", "What do you do to maintain your friendships?"];
const friendsRes = friendsQ.join('<br>');
const friends1 = document.querySelector("#Friends > p:nth-child(3)").innerHTML = friendsRes;

// Books
const booksQ = ["What is your favourite book?", "Do you have any favourite writers?", "What is the longest book you've read? How long did it take to read?", "Would you like to write a book?", "Have you tried reading books in English?", "Do you ever re-read books?"];
const booksRes = booksQ.join('<br>');
const books1 = document.querySelector("#Books > p:nth-child(3)").innerHTML = booksRes;

// Dreams
const dreamsQ = ["How often do you dream?", "Do you remember your dreams?", "Have you ever had nightmares?", "Would you like to stop having dreams or have more dreams?", "Do you sometimes have recurring dreams?", "Have you ever dreamnt in English?"];
const dreamsRes = dreamsQ.join('<br>');
const dreams1 = document.querySelector("#Dreams > p:nth-child(3)").innerHTML = dreamsRes;

// Restaurants
const restaurantsQ = ["Do you often go to restaurants?", "What is the best restaurant you've been to?", "Do you like expensive/fancy restaurants?", "What are the restaurants like in your local area?", "What do you think about tipping in restaurants?","Are you able to order food in English?"];
const restaurantsRes = restaurantsQ.join('<br>');
const restaurants1 = document.querySelector("#Restaurants > p:nth-child(3)").innerHTML = restaurantsRes;


// Weather
const weatherQ = ["What is the weather like today?", "Which season do you like best?", "Do you prefer hot or cold weather?", "Have you ever experienced extreme weather?", "When was the last time the weather ruined one of your plans?"];
const weatherRes = weatherQ.join('<br>');
const weather1 = document.querySelector("#Weather > p:nth-child(3)").innerHTML = weatherRes;

// Countries
const countriesQ = ["Which countries have you visited?", "Would you like to live in a different country?", "Which country do you think is the most beautiful?", "Is there a country which you would never like to visit?", "What changes would you like to see in your country?"];
const countriesRes = countriesQ.join('<br>');
const countries1 = document.querySelector("#Countries > p:nth-child(3)").innerHTML = countriesRes;

// Experiences
const experiencesQ = ["Have you ever climbed a mountain?", "Have you ever broken a bone?", "Have you ever shot a gun?", "Have you ever been skydiving?", "Have you ever appeared on TV?", "Have you ever seen a ghost?", "What do you want to experience in the future?"];
const experiencesRes = experiencesQ.join('<br>');
const experiences1 = document.querySelector("#Experiences > p:nth-child(3)").innerHTML = experiencesRes;

// Addictions
const addictionsQ = ["Are you addicted to anything now?", "Which addictions do you think are dangerous?", "Are there healthy addictions?", "Do you think that learning English can be addictive?", "Are you a workaholic?", "What is the difference between a habit and an addiction?", "Have you ever freed yourself from an addiction?"];
const addictionsRes = addictionsQ.join('<br>');
const addictions1 = document.querySelector("#Addictions > p:nth-child(3)").innerHTML = addictionsRes;


// Adventure
const adventureQ = ["Is life an adventure?", "Do you consider yourself an adventurous person?", "Have you tried any extreme sports?", "What adventures would you like to go on in the future?", "Does there have to be an element of danger in an adventure?"];
const adventureRes = adventureQ.join('<br>');
const adventure1 = document.querySelector("#Adventure > p:nth-child(3)").innerHTML = adventureRes;

// Advertising
const advertisingQ = ["What comes to mind when you hear the word 'Advertising'?", "Are you influenced by advertising when buying new things?", "Are there any types of advertising that annoy you?", "What are the most effective ways of advertising?", "What regulations should be applied to adverts to protect consumers?"];
const advertisingRes = advertisingQ.join('<br>');
const advertising1 = document.querySelector("#Advertising > p:nth-child(3)").innerHTML = advertisingRes;

// Aliens
const aliensQ = ["Do you believe aliens exist?", "What would you imagine aliens to look like?", "Do you think aliens would want to communicate with us?", "Do you think aliens would be a threat to humans?", "What do you think of people who claim they've seen a UFO?"];
const aliensRes = aliensQ.join('<br>');
const aliens1 = document.querySelector("#Aliens > p:nth-child(3)").innerHTML = aliensRes;

// Art
const artQ = ["Do you consider youself an artistic person?", "What kinds of art interest you?", "Who are the most famous artists in your country?", "Do you think graffiti is art?", "Do you think anyone can be an artist or do you need a special talent?"];
const artRes = artQ.join('<br>');
const art1 = document.querySelector("#Art > p:nth-child(3)").innerHTML = artRes;

// Boredom
const boredomQ = ["How often do you tend to feel bored?", "Have you read a boring book or watched a boring movie before?", "How would you help someone who says they are bored?", "Do you sometimes feel bored when learning English?", "What's the most boring thing you have to do in your daily life?"];
const boredomRes = boredomQ.join('<br>');
const boredom1 = document.querySelector("#Boredom > p:nth-child(3)").innerHTML = boredomRes;

// Cars
const carsQ = ["Do you own a car? What kind?", "What is your dream car?", "Is there a car that you hate the design of?", "Which country do you think makes the best cars?", "What do you imagine cars of the future to look like?"];
const carsRes = carsQ.join('<br>');
const cars1 = document.querySelector("#Cars > p:nth-child(3)").innerHTML = carsRes;

// Celebrities
const celebritiesQ = ["What do you think of celebrities?", "Have you ever met a celebrity?", "What do you think of the paparazzi?", "Why do you think many people are obsessed with celebrities?", "Do you think celebrities get enough privacy?", "Are there any celebrities that you can't stand?"];
const celebritiesRes = celebritiesQ.join('<br>');
const celebrities1 = document.querySelector("#Celebrities > p:nth-child(3)").innerHTML = celebritiesRes;

// Change
const changeQ = ["Is change important to you?", "Have you made any changes recently in your life?", "Have you had to make any difficult changes in your life?", "What has changed in your life compared to ten years ago?", "What is something that you will never change about yourself?"];
const changeRes = changeQ.join('<br>');
const change1 = document.querySelector("#Change > p:nth-child(3)").innerHTML = changeRes;

// Competition
const competitionQ = ["Are you a competitive person?", "Is competition good for us?", "	Do you like competitive people?", "Do you care if you lose in a competition?", "Are men more competitive than women?"];
const competitionRes = competitionQ.join('<br>');
const competition1 = document.querySelector("#Competition > p:nth-child(3)").innerHTML = competitionRes;

// Crime
const crimeQ = ["Have you ever seen a crime happen? What did you witness?", "Is crime a problem where you live?", "Why do you think people become criminals?", "Have you ever done anything illegal?", "Do you worry about Internet crime?"];
const crimeRes = crimeQ.join('<br>');
const crime1 = document.querySelector("#Crime > p:nth-child(3)").innerHTML = crimeRes;

// Driving
const drivingQ = ["Are you a good driver?", "Do you like to drive at night?", "Have you driven a car in a foreign country?", "How often do you think people need to renew their driving licence?", "Do you think the age for driving should be raised or lowered?"];
const drivingRes = drivingQ.join('<br>');
const driving1 = document.querySelector("#Driving > p:nth-child(3)").innerHTML = drivingRes;

// Fitness
const fitnessQ = ["Is it important to you to be fit?", "What kind of exercise do you do?", "Are you a healthy eater?", "Are you a member of a gym?", "Is fitness fashionable?"];
const fitnessRes = fitnessQ.join('<br>');
const fitness1 = document.querySelector("#Fitness > p:nth-child(3)").innerHTML = fitnessRes;

// Gambling
const gamblingQ = ["What do you think of gambling?", "Have you ever been to a casino?", "Do you play the lottery?", "Have you ever placed a bet?", "Do you think it's possible for a gambling addict to kick the habit?"];
const gamblingRes = gamblingQ.join('<br>');
const gambling1 = document.querySelector("#Gambling > p:nth-child(3)").innerHTML = gamblingRes;

// Gardening
const gardeningQ = ["Does your house have a garden?", "Is gardening an expensive hobby?", "How much time do you spend in the garden?", "What would you like to grow?", "Do you think it's necessary to own a large garden to enjoy gardening?"];
const gardeningRes = gardeningQ.join('<br>');
const gardening1 = document.querySelector("#Gardening > p:nth-child(3)").innerHTML = gardeningRes;

// Gossip
const gossipQ = ["Do you like to gossip?", "Who gossips more, men or women?", "Are you interested in celebrity gossip?", "Has someone ever spread a rumour about you?", "What are your thoughts on gossip newspapers?"];
const gossipRes = gossipQ.join('<br>');
const gossip1 = document.querySelector("#Gossip > p:nth-child(3)").innerHTML = gossipRes;

// Fears
const fearsQ = ["What is your biggest fear?", "What were you afraid of as a child?", "Do you have any phobias?", "Have you ever been afraid of the weather?", "How would you help someone to get over their fears?"];
const fearsRes = fearsQ.join('<br>');
const fears1 = document.querySelector("#Fears > p:nth-child(3)").innerHTML = fearsRes;

// Hangovers
const hangoversQ = ["Do you get hangovers?", "When was the last time you had a hangover?", "How do you treat a hangover?", "Do you feel regretful about drinking when you are having a hangover?", "What do you think of people who complain about having a hangover?"];
const hangoversRes = hangoversQ.join('<br>');
const hangovers1 = document.querySelector("#Hangovers > p:nth-child(3)").innerHTML = hangoversRes;

// Health
const healthQ = ["Are you a healthy person?", "Does your country have good healthcare?", "How is your mental health?", "What are your thoughts on vaccines?", "What can you do to improve your health?"];
const healthRes = healthQ.join('<br>');
const health1 = document.querySelector("#Health > p:nth-child(3)").innerHTML = healthRes;

// History
const historyQ = ["What do you know about the history of your country?", "Do/did you enjoy studying history at school?", "Are you interested in a particular era of history?", "What do you know about your family history?", "What are the most important historical sites in your country?"];
const historyRes = historyQ.join('<br>');
const history1 = document.querySelector("#History > p:nth-child(3)").innerHTML = historyRes;

// Internet
const internetQ = ["How often do you use the Internet?", "Would you say you are addicted to the Internet?", "Do you think the Internet is dangerous?", "How would your life be without the Internet?", "What are your earliest memories of using the Internet?"];
const internetRes = internetQ.join('<br>');
const internet1 = document.querySelector("#Internet > p:nth-child(3)").innerHTML = internetRes;

// Interviews
const interviewsQ = ["Do you like being interviewed?", "What was your worst interview?", "Do you get nervous during interviews?", "How do you prepare for an interview?", "How do you feel when talking about your weaknesses in an interview?"];
const interviewsRes = interviewsQ.join('<br>');
const interviews1 = document.querySelector("#Interviews > p:nth-child(3)").innerHTML = interviewsRes;

// Junk Food
const junkFoodQ = ["What is your favourite junk food?", "Does eating junk food make you happy?", "What do you think of fast food?", "Is it easy for you to resist eating junk food?", "How would you rate the quality of junk food in your country?"];
const junkFoodRes = junkFoodQ.join('<br>');
const junkFood1 = document.querySelector("#JunkFood > p:nth-child(3)").innerHTML = junkFoodRes;

// Lies
const liesQ = ["Do you think it's OK to lie sometimes? When?", "Have you ever lied in an interview?", "When was the last time you told a lie?", "Do you feel guilty when you tell a lie?", "Are you convincing when lying?"];
const liesRes = liesQ.join('<br>');
const lies1 = document.querySelector("#Lies > p:nth-child(3)").innerHTML = liesRes;

// Magic
const magicQ = ["Have you ever seen a magic show?", "Can you do magic?", "Are there any famous magicians in your country?", "What do you know about black magic?", "Would you like to have magical powers?"];
const magicRes = magicQ.join('<br>');
const magic1 = document.querySelector("#Magic > p:nth-child(3)").innerHTML = magicRes;
 

// Marathons
const marathonsQ = ["Have you ever completed a marathon?", "What's the longest distance you have ever ran?", "How would you train before a marathon?", "Why do you think marathon runners like doing marathons?", "Have you ever marathoned a TV series?"];
const marathonsRes = marathonsQ.join('<br>');
const marathons1 = document.querySelector("#Marathons > p:nth-child(3)").innerHTML = marathonsRes;

// Marriage
const marriageQ = ["Is marriage important to you?", "At what age do you want/did you get married?", "What do you think of arranged marriages?", "What is the secret to a happy marriage?", "Is married life more fulfilling than single life?"];
const marriageRes = marriageQ.join('<br>');
const marriage1 = document.querySelector("#Marriage > p:nth-child(3)").innerHTML = marriageRes;

// Museums
const museumsQ = ["What types of museums do you like?", "Are there any interesting museums in your area?", "Do you think museums should be free to enter?", "What's the most impressive thing you've seen in a museum?", "Do you offer donations when visiting museums?"];
const museumsRes = museumsQ.join('<br>');
const museums1 = document.querySelector("#Museums > p:nth-child(3)").innerHTML = museumsRes;

// Nature
const natureQ = ["How important is nature to you?", "Do you live in an area that has a lot of nature?", "Where is the best place in your country to experience nature?", "Have you ever visited a natural wonder?", "How different do you think the natural world will be 100 years from now?"];
const natureRes = natureQ.join('<br>');
const nature1 = document.querySelector("#Nature > p:nth-child(3)").innerHTML = natureRes;

// Neighbours
const neighboursQ = ["Do you get on well with your neighbours?", "Have you ever had problems with your neighbours?", "Would you like to change your neighbours?", "What’s your neighborhood like?", "Are you a good neighbour?"];
const neighboursRes = neighboursQ.join('<br>');
const neighbours1 = document.querySelector("#Neighbours > p:nth-child(3)").innerHTML = neighboursRes;

// Old Age
const oldAgeQ = ["What would you like to do in your old age?", "What age would you like to live to?", "Where would you like to live in your old age?", "Does your country have an aging population?", "Do you worry about having to depend on others in your old age?"];
const oldAgeRes = oldAgeQ.join('<br>');
const oldAge1 = document.querySelector("#OldAge > p:nth-child(3)").innerHTML = oldAgeRes;

// Olympics
const olympicsQ = ["What are your best memories of the Olympics?", "Which sport is your country good at?", "What is your favourite Olympic event?", "Would you like your country to host the Olympics?", "What are your thoughts on cheating in the Olympics?"];
const olympicsRes = olympicsQ.join('<br>');
const olympics1 = document.querySelector("#Olympics > p:nth-child(3)").innerHTML = olympicsRes;

// Police
const policeQ = ["Have the police ever helped you?", "Have the police ever stopped you?", "What is the general feeling about police in your country?", "Do you think the police have too much power?", "What would life be like without police?"];
const policeRes = policeQ.join('<br>');
const police1 = document.querySelector("#Police > p:nth-child(3)").innerHTML = policeRes;

// Recycling
const recyclingQ = ["Are you good at recycling?", "What things are difficult to recycle?", "Should there be fines to pay for people who do not recycle?", "Should we be rewarded for recycling?", "Do you feel as though you are making a difference to the environment when you recycle?"];
const recyclingRes = recyclingQ.join('<br>');
const recycling1 = document.querySelector("#Recycling > p:nth-child(3)").innerHTML = recyclingRes;

// Retirement
const retirementQ = ["At what age would you like to retire?", "What would you like to do in retirement?", "If you could choose to retire now, would you?", "What do you think life would be like living in a nursing/retirement home?", "Do you think you would worry about having too much free time in retirement?"];
const retirementRes = retirementQ.join('<br>');
const retirement1 = document.querySelector("#Retirement > p:nth-child(3)").innerHTML = retirementRes;

// Science
const scienceQ = ["Do you always trust science?", "Did you enjoy studying science at school? Which branch of science did you like?", "Are you a fan of science fiction movies?", "Can you always trust science?", "Are there any questions that science can't answer?"];
const scienceRes = scienceQ.join('<br>');
const science1 = document.querySelector("#Science > p:nth-child(3)").innerHTML = scienceRes;

// Safety
const safetyQ = ["Do you live in a safe place?", "How often do you think about your safety?", "Have you ever called the emergency services?", "Do you feel safe walking outside at night?", "What do you think about keeping a gun in your house?"];
const safetyRes = safetyQ.join('<br>');
const safety1 = document.querySelector("#Safety > p:nth-child(3)").innerHTML = safetyRes;

// Social Media
const socialMediaQ = ["Are you active on social media?", "How many social media platforms do you use?", "How much time do you spend on social media?", "What are the dangers of social media?", "Should we allow children to use social media?"];
const socialMediaRes = socialMediaQ.join('<br>');
const socialMedia1 = document.querySelector("#SocialMedia > p:nth-child(3)").innerHTML = socialMediaRes;

// Souvenirs
const souvenirsQ = ["What is a good souvenir from your country?", "Do you enjoy buying souvenirs when visiting foreign countries?", "What are the best kinds of souvenirs?", "Is the airport the best place to buy souvenirs?", "What's the most interesting souvenir you've ever received?"];
const souvenirsRes = souvenirsQ.join('<br>');
const souvenirs1 = document.querySelector("#Souvenirs > p:nth-child(3)").innerHTML = souvenirsRes;

// Stress
const stressQ = ["What makes you feel stressed?", "How do you relieve stress?", "Do you think that learning English is stressful?", "What are some of the main causes of stress?", "How can you live a stress free life?", "Are there any situations where you can anticipate stress?"];
const stressRes = stressQ.join('<br>');
const stress1 = document.querySelector("#Stress > p:nth-child(3)").innerHTML = stressRes;

// Superstitions
const superstitionsQ = ["Do you believe in ghosts?", "Have you ever been to a fortune teller?", "What things are considered to be lucky in your country? How about unlucky?", "Do you have a lucky number or charm?", "Do you read your horoscope?"];
const superstitionsRes = superstitionsQ.join('<br>');
const superstitions1 = document.querySelector("#Superstitions > p:nth-child(3)").innerHTML = superstitionsRes;

// Tourism
const tourismQ = ["Is tourism important in your country?", "What are the popular tourist attractions in your country?", "Does your country have any problems with tourists?", "Where is your next tourist destination?", "If you could create a tourism slogan for your country, what would it be?"];
const tourismRes = tourismQ.join('<br>');
const tourism1 = document.querySelector("#Tourism > p:nth-child(3)").innerHTML = tourismRes;

// Websites
const websitesQ = ["Is there a website you visit everyday?", "What do you think is the most useful website?", "Do you have/want to have your own website?", "What do you think of this website?", "Do you think your government should be able to censor websites?"];
const websitesRes = websitesQ.join('<br>');
const websites1 = document.querySelector("#Websites > p:nth-child(3)").innerHTML = websitesRes;

// Weddings
const weddingsQ = ["Have you attended any weddings recently?", "Are weddings too expensive?", "How many guests would you like to attend your wedding?", "Is your wedding day the happiest day of your life?", "In your country, do people have to invite people they don’t like to their wedding?"];
const weddingsRes = weddingsQ.join('<br>');
const weddings1 = document.querySelector("#Weddings > p:nth-child(3)").innerHTML = weddingsRes;


// Animal Rights
const animalRightsQ = ["What rights do animals have? Should they have the same rights as humans?", "What is your stance on keeping animals in zoos?", "Are there any sports considered controversial that involve animals?", "Have you ever witnessed the mistreatment of an animal?", "How do you feel about animals that are used in medical research or for testing cosmetics?"];
const animalRightsRes = animalRightsQ.join('<br>');
const animalRights1 = document.querySelector("#AnimalRights > p:nth-child(3)").innerHTML = animalRightsRes;

// Corporate Responsibility
const corporateResponsibilityQ = ["Does the company you work for exercise good corporate responsibility?", "Do you know any companies that have bad reputations?", "Are there products you won’t buy for ethical reasons?", "Which companies do you believe are irresponsible in regards to their effect on the environment?", "Are there certain industries that are likely to display poor corporate responsibility?"];
const corporateResponsibilityRes = corporateResponsibilityQ.join('<br>');
const corporateResponsibility1 = document.querySelector("#CorporateResponsibility > p:nth-child(3)").innerHTML = corporateResponsibilityRes;

// Cosmetic Surgery
const cosmeticSurgeryQ = ["Have you ever considered getting or have gotten cosmetic surgery?", "If cosmetic surgery was free would you feel more inclined to get it?", "Do you think people always look better after getting cosmetic surgery?", "What do you think goes through the mind of a cosmetic surgeon before an operation?", "How would you react if cosmetic surgery done on you was botched?"];
const cosmeticSurgeryRes = cosmeticSurgeryQ.join('<br>');
const cosmeticSurgery1 = document.querySelector("#CosmeticSurgery > p:nth-child(3)").innerHTML = cosmeticSurgeryRes;

// Deforestation
const deforestationQ = ["When you think of deforestation do you imagine a particular place in the world?", "What do you know about the Amazon rainforest?", "What countries have the worst rates of deforestation?", "How would local communities or tribes be re-located if deforestation occurs in or around their homes?", "What are the long term repercussions of deforestation?"];
const deforestationRes = deforestationQ.join('<br>');
const deforestation1 = document.querySelector("#Deforestation > p:nth-child(3)").innerHTML = deforestationRes;

// Digital Revolution
const digitalRevolutionQ = ["When you think of the digital revolution what comes to mind?", "In what stage of the digital revolution do you think we are?", "Due to more people needing to be online do you think we are more vunlnerable? In what ways?", "How would you compare the digital revolution to the industrial revolution?", "Do you think sometimes that we are overloaded with information?"];
const digitalRevolutionRes = digitalRevolutionQ.join('<br>');
const digitalRevolution1 = document.querySelector("#DigitalRevolution > p:nth-child(3)").innerHTML = digitalRevolutionRes;

// Discrimination
const discriminationQ = ["Have you ever been discriminated against?", "What do you think motivates people to discriminate against others?", "Is discriminating against a certain group of people ever justified?", "Do you know anybody who has fought for equal rights?", "Do you think discrimination will ever be eradicated?"];
const discriminationRes = discriminationQ.join('<br>');
const discrimination1 = document.querySelector("#Discrimination > p:nth-child(3)").innerHTML = discriminationRes;

// Endangered Species
const endangeredSpeciesQ = ["Do you worry about certain species becoming endangered?", "How can we protect animals who are at risk of becoming endangered?", "Are there endangered species in your country?", "What do you think of the people who keep exotic animals as pets?", "Which animal extinction would you be the most shocked by?"];
const endangeredSpeciesRes = endangeredSpeciesQ.join('<br>');
const endangeredSpecies1 = document.querySelector("#EndangeredSpecies > p:nth-child(3)").innerHTML = endangeredSpeciesRes;

// Euthanasia
const euthanasiaQ = ["Is euthanasia legal in your country? If not, should it be?", "If someone wants to die, is it their choice?", "Who has the right to turn off a life support machine?", "What is the difference between euthanasia and assisted suicide?", "How could euthanasia be restricted so it isn't misused?"];
const euthanasiaRes = euthanasiaQ.join('<br>');
const euthanasia1 = document.querySelector("#Euthanasia > p:nth-child(3)").innerHTML = euthanasiaRes;

// Globalisation
const globalisationQ = ["What are your initial thoughts when you hear the term 'Globalisation'?", "Is globalisation good for the world?", "Do you think countries are losing their national identities because of globalisation?", "Are imported products generally of better quality than domestically produced ones?", ""];
const globalisationRes = globalisationQ.join('<br>');
const globalisation1 = document.querySelector("#Globalisation > p:nth-child(3)").innerHTML = globalisationRes;

// Government
const governmentQ = ["How do you feel about the current government of your country?", "In your opinion, who was the best leader your country ever had?", "What should a good government do?", "What is the minimum age to vote in your country? Do you think that it is at the right level?", "What do you think about the statement, 'If you don't vote you have no right to complain about the government'?"];
const governmentRes = governmentQ.join('<br>');
const government1 = document.querySelector("#Government > p:nth-child(3)").innerHTML = governmentRes;

// Gun Control
const gunControlQ = ["Is it necessary to own a gun?", "Is is easy or difficult to obtain a gun in your country?", "Would you feel safer if you kept a gun in your home?", "Are the majority of people in your country against or in favor of gun ownership?", "What are the best strategies for self-defense?"];
const gunControlRes = gunControlQ.join('<br>');
const gunControl1 = document.querySelector("#GunControl > p:nth-child(3)").innerHTML = gunControlRes;

// Immigration
const immigrationQ = ["Would you like to live and work in a different country?", "Should immigrants be required to learn the local language?", "Do you think local culture is threatened by immigration?", "How does your country regulate immigration?", "How long should immigrants live in the foreign country before being eligible for naturalisation?"];
const immigrationRes = immigrationQ.join('<br>');
const immigration1 = document.querySelector("#Immigration > p:nth-child(3)").innerHTML = immigrationRes;

// Minimalism
const minimalismQ = ["Would you like to live a more minimalist lifestyle?", "Do you hoard anything?", "How can you declutter your home from stuff you don’t need?", "Are you a frugal person?", "Do you think minimalism helps a person to establish clearer goals?"];
const minimalismRes = minimalismQ.join('<br>');
const minimalism1 = document.querySelector("#Minimalism > p:nth-child(3)").innerHTML = minimalismRes;

// Multiculturalism
const multiculturalismQ = ["Do you live in a multicultural community?", "What are the negative interpretations of multiculturalism?", "Would you ever marry someone from a different culture?", "Can multiculturalism result in a country losing its identity?", "Do you consider yourself to be tolerant of people from different culutres?"];
const multiculturalismRes = multiculturalismQ.join('<br>');
const multiculturalism1 = document.querySelector("#Multiculturalism > p:nth-child(3)").innerHTML = multiculturalismRes;

// Mysteries
const mysteriesQ = ["Are you a mysterious person?", "Does your country have any famous unsolved mysteries?", "Have you ever solved a mystery?", "Have you ever known something was going to happen before it did?", "Do you believe there are things in our universe that cannot be explained?"];
const mysteriesRes = mysteriesQ.join('<br>');
const mysteries1 = document.querySelector("#Mysteries > p:nth-child(3)").innerHTML = mysteriesRes;

// Natural Disasters
const naturalDisastersQ = ["How often do natural disasters occurs in your country?", "How do you prepare for a disaster?", "Would you consider moving to a country where natural disasters occur less often?", "Are you prepared to donate money in order to help people affected by a disaster?", "If the end of the world was coming, what would you do in your final week on Earth?"];
const naturalDisastersQRes = naturalDisastersQ.join('<br>');
const naturalDisastersQ1 = document.querySelector("#NaturalDisasters > p:nth-child(3)").innerHTML = naturalDisastersQRes;

// Patience
const patienceQ = ["Are you a patient person?", "What situations are difficult to show patience?", "What is something you have no patience for?", "How can you improve the quality of patience in yourself?", "Do you think it's impossible to have infinite patience?"];
const patienceRes = patienceQ.join('<br>');
const patience1 = document.querySelector("#Patience > p:nth-child(3)").innerHTML = patienceRes;

// Philosophy
const philosophyQ = ["Do you think philosophy is important?", "Is the most important purpose in life happiness?", "Does the study of philosophy ever lead to answers or simply more questions?", "What happens to a person after they die?", "Is there a meaning to life?"];
const philosophyRes = philosophyQ.join('<br>');
const philosophy1 = document.querySelector("#Philosophy > p:nth-child(3)").innerHTML = philosophyRes;

// Protests
const protestsQ = ["What is your initial feeling when hearing the word 'protest'?", "Have you ever been involved in a protest? If not, what would motivate you to participate in one?", "What is the most effective way to protest?", "What do you think about police intervening in protests?", "What other ways to voice your opinion are there aside from protests?"];
const protestsRes = protestsQ.join('<br>');
const protests1 = document.querySelector("#Protests > p:nth-child(3)").innerHTML = protestsRes;

// Sustainable Development
const sustainabilityQ = ["How would you rate the air quality in your area?", "Which do you believe to be more important, increasing people's standard of living, or protecting the environment?", "What types of energy are popular in your country? Are there many alternatives?", "Does your country have a problem of overpopulation?", "Does the responsibility for pollution fall more on the individual or the government?"];
const sustainabilityRes = sustainabilityQ.join('<br>');
const sustainability1 = document.querySelector("#Sustainability > p:nth-child(3)").innerHTML = sustainabilityRes;

// Xenophobia
const xenophobiaQ = ["What images spring to mind when you hear the word 'xenophobia'?", "To what extent does xenophobia exist in your country?", "Do you think xenophobic people are dangerous?", "Can patriotism lead to xenophobia?", "What are the impacts of xenophobia on psychosocial adjustment for immigrants?"];
const xenophobiaRes = xenophobiaQ.join('<br>');
const xenophobia1 = document.querySelector("#Xenophobia > p:nth-child(3)").innerHTML = xenophobiaRes;