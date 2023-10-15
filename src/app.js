const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (var i = 0; i < players.length; i++) {
        var player = {
            name: players[i],
            strength: getRandomStrength(),
            image: getImage(i),
            type: getHeroType(i),
        };
        detailedPlayers.push(player);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random() * 100);
}

const getHeroType = (num) => {
    if(num % 2 === 0){
        return "hero";
    }else{
        return "villain";
    }
}

const getImage = (num) => {
    var imageNumber = num + 1;
    return `images/super-${imageNumber}.png`;
}

const buildPlayers = (players, type) => {
    var fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(var i = 0; i < players.length; i++){
        if(players[i].type === type){
            fragment += 
            `<div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>`
        }
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}