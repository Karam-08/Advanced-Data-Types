let gameTitles = ['Warframe', 'Black Ops Zombies', 'Half Life', 'Portal', 'Roblox', 'Dead Space', 'Fable: The Lost Chapters', 'Fortnite']
let players = ['Karam', 'Hussein', 'Jayden']

playerGames = new Map(); 

let gameScores = [
    ['85', '92', '98'],
    ['100', '80', '94'],
    ['78', '92', '85']
]   

function getRandomGames(){
    let selected = []; // Empty array
    while(selected.length < 3){ // Sets the amount of games
        let game = gameTitles[Math.floor(Math.random() * gameTitles.length)]; // A random game is chosen
        if(!selected.includes(game)){ // If the random game chosen is not already in the array,
            selected.push(game); // It is pushed into the array
            console.log(`"${game}" has been added to the player's list.`)
        }else{
            console.log(`The player already has "${game}" on their list, so it will be skipped.`)
        }
    }
    return selected;
}

function assignGames() {
    for (var i = 0; i < players.length; i++){ // For each player,
        playerGames.set(players[i], getRandomGames()); // Give each of them 3 random games
    }
}

assignGames()

console.log(playerGames)