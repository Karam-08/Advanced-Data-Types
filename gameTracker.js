let gameTitles = ['Warframe', 'Black Ops Zombies', 'Half Life', 'Portal', 'Roblox', 'Dead Space', 'Fable: The Lost Chapters', 'Fortnite']

let playerGames = new Map();




// 2D array to store scores across 3 rounds for each player
let playerScores = []; // Format: [[scores for player 1], [scores for player 2], ...]
let playerNames = [];  // List of player names, to align with playerScores index




// Function to add a game to a player's Set (avoids duplicates)
function addGameToPlayer(player, game) {
    if (!playerGames.has(player)) {
        playerGames.set(player, new Set());
    }




    gamesSet = playerGames.get(player);
    if (gamesSet.has(game)) {
        console.log(`${player} already has "${game}" in their list of games.`);
    } else {
        gamesSet.add(game);
        console.log(`"${game}" added to ${player}'s game list`);
    }
}




// Function to randomly assign 3 games to a player from gameTitles
function assignRandomGames(player) {
    while (playerGames.get(player).size < 3) {
        randomGame = gameTitles[Math.floor(Math.random() * gameTitles.length)];
        addGameToPlayer(player, randomGame);
    }
}




// Function to assign random scores for 3 rounds
function assignScores(player) {
    let scores = [];
    for (let i = 0; i < 3; i++) {
        scores.push(Math.floor(Math.random() * 101)); // Score between 0 and 100
    }
    playerScores.push(scores);
    playerNames.push(player);
}




// Function to display all players and their games
function displayPlayerGames() {
    console.log("Players and Their Games:");
    playerGames.forEach((games, player) => {
        console.log(`${player}: ${Array.from(games).join(", ")}`);
    });
}




// Function to display each player's score summary
function displayScoreSummary() {
    console.log("Score Summary:");
    for (let i = 0; i < playerNames.length; i++) {
        const scores = playerScores[i];
        const average = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        console.log(`${playerNames[i]} - Scores: ${scores.join(", ")} | Average: ${average}`);
    }
}


// Sample list of players
const players = ["Alice", "Bob", "Charlie", "Diana"];




// Assign games and scores
players.forEach(player => {
    playerGames.set(player, new Set()); // Initialize Set
    assignRandomGames(player);
    assignScores(player);
});




// =============================
// 📢 Output
// =============================




displayPlayerGames();
displayScoreSummary();

