let gameTitles = ['Warframe', 'Black Ops Zombies', 'Half Life', 'Portal', 'Roblox', 'Dead Space', 'Fable: The Lost Chapters', 'Fortnite']

function gamesPlayed(){
    return
}

gamesPlayed = new Set([randomGame1, randomGame2, randomGame3])

console.log(gamesPlayed)

let gameScores = [
    ['85', '92', '98'],
    ['100', '80', '94'],
    ['78', '92', '85']
]

let players = new Map([
    ['Karam', gamesPlayed],
    ['Jayden', gamesPlayed],
    ['Hussein', gamesPlayed]
])

console.table(players)