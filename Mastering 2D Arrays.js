const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// # 1
function print2dArray(arr){
    for(var i = 0; i < arr.length; i++){ // For each row
        console.log(arr[i]) // Print everything in the row
    }
}

// # 2
function sum2dArray(arr){
    let sum = 0 // Sum value
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){ // For each row and column
            sum += arr[i][j]; // Add each number in the rows and columns
        }
    }
    return sum; // Return total value
}

// # 3
function modify2dArray(arr, row, col, newValue){
    arr[row][col] = newValue // Modifies the selected array, row, and columns into the value of your choosing
}

// # 4
function findMax(arr){
    let max = 0 // Variable
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){ // For each row and column
            if(max < arr[i][j]){ // If max is less than the number in the row/column
                max = arr[i][j]; // max becomes that number
            }
        }
    }
    return max; // Returns the highest number
}

// # 5
function transpose(){
    let rows = arr.length // Number of rows in OG array
    let cols = arr[0].length // Number of columns in OG array
    let transposed = [] // Empty array to store transposed array

    for(var j = 0; j < cols; j++){
        transposed[j] = [] // Makes sure that the j-th row exists before putting values in it
        for(var i = 0; i < rows; i++){ 
            transposed[j][i] = arr[i][j] // Swaps the row i and column j from the OG array
        }
    }
    return transposed
}

first = print2dArray(arr)
console.log(first) // Looks neater
console.log('') // Purely for spacing

second = sum2dArray(arr)
console.log(second)
console.log('')

modify2dArray(arr, 1, 1, 10)
console.log(arr) // Console.log(modify2dArray(arr)) doesn't work for some reason not sure why
console.log('')

fourth = findMax(arr)
console.log(fourth)
console.log('')

fifth = transpose(arr)
console.log(fifth)
