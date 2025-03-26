let day =[
    ['School', 8],
    ['Food', 1],
    ['Driving', 2],
    ['Free Time', 6],
    ['Sleeping', 7]
]

day.splice(3, 0, ['Study', 2]) // Changing the 0 moves the index up
day[4][1] -= 2
day.splice(5, 0, ['Programming', 2]) 
day[5][1] -= 1
console.table(day) // Outputs all of the information on the array into an easy to read table
console.log(day)

for(var i = 0; i < day.length; i++){
    for(var j = 0; j < day[i].length; j++){
        console.log('[' + i + ',' + j + '] = ' + day[i][j]) 
    }
}