let gameTitles = ['Warframe', 'Black Ops Zombies', 'Half Life', 'Portal', 'Roblox', 'Dead Space', 'Fable: The Lost Chapters', 'Fortnite'];
let players = ['Karam', 'Hussein', 'Jayden'];

let playerGames = new Map(); // Holds each player and assigned games

let gameScores = [
    [85, 92, 98], // Karam's scores
    [100, 80, 94], // Hussein's scores
    [78, 92, 85] // Jayden's scores
];

function averageScore(scores){ // Scores represents one row
    let sum = 0;
    for(var i = 0; i < scores.length; i++){ // Only loops through one row in the 2d array
        sum += scores[i]; // Adds up every score
    }
    return sum / scores.length; // Returns the average score in the row
}

function getRandomGames() {
    selected = new Set(); // Empty set to avoid duplicates
    while(selected.size < 3) { // 3 is the total amount of games for each player
        let game = gameTitles[Math.floor(Math.random() * gameTitles.length)]; // A random game is chosen
        if(!selected.has(game)) { // If the random game chosen is not already in the set,
            selected.add(game); // It is pushed into the set
            console.log(`"${game}" has been added to the player's list.`);
        }else{
            console.log(`Duplicate game "${game}" has been detected for the player's list. Skipping addition.`);
        }
    }
    return selected;
}

function assignGames() {
    for (var i = 0; i < players.length; i++) { // For each player,
        playerGames.set(players[i], getRandomGames()); // Give each of them 3 random games
    }
}

assignGames(); // Assigns the games to players

console.log(""); // Spacing
console.log("Player Games Summary:");

for (var i = 0; i < players.length; i++) {
    var player = players[i]; // For each player
    let games = playerGames.get(player); // Gets their assigned games
    console.log(player + ":", games); // Displays the games each player will play
}

console.log("");
console.log("Score Summary:");

for(var i = 0; i < players.length; i++){ // For each player
    var scores = gameScores[i]; // get their scores
    console.log(players[i] + ":", scores, "|", "Average:", Math.round(averageScore(scores)));
    // Gets specific player, their scores, and shows the average score for each player
}
