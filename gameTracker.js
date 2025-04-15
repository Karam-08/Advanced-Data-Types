let gameTitles = ['Warframe', 'Black Ops Zombies', 'Half Life', 'Portal', 'Roblox', 'Dead Space', 'Fable: The Lost Chapters', 'Fortnite']
let playerGames = new Map();

function addGame(player, game){
    if(!playerGames.has(player)){
        playerGames.set(player, new Set());
    }

    gamesSet = playerGames.get(player)
    if(gamesSet.has(game)){
        console.log(`${player} already has ${game} in their list`)
    }else{
        gamesSet.add(game)
        console.log(`Added ${game} to ${player} list.`)
    }
}

function assignGames(player){
    while(playerGames < 3){
        randomGame = gameTitles[Math.floor(Math.random() * gameTitles.length)];
        addGame(player, randomGame)
    }
}

let players = ["Karam", "Hussein", "Maryam"]

console.log(playerGames)