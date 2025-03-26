const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// # 1
function print2dArray(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

// # 2
function sum2dArray(arr){
    let sum = 0
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
    }
    return sum;
}

// # 3
function modify2dArray(arr, row, col, newValue){
    arr[row][col] = newValue
}

// # 4
function findMax(arr){
    let max = 0
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(max < arr[i][j]){
                max = arr[i][j];
            }
        }
    }
    return max;
}

findMax(arr)

// # 5
function transpose(){
    let rows = arr.length
    let cols = arr[0].length
    let transposed = []

    for(var j = 0; j < cols; j++){
        transposed[j] = []
        for(var i = 0; i < rows; i++){
            transposed[j][i] = arr[i][j]
        }
    }
    return transposed
}

first = print2dArray(arr)
console.log(first)
console.log('')

second = sum2dArray(arr)
console.log(second)
console.log('')

modify2dArray(arr, 0, 2, 15)
console.log(arr)
console.log('')

fourth = findMax(arr)
console.log(fourth)
console.log('')

fifth = transpose(arr)
console.log(fifth)
