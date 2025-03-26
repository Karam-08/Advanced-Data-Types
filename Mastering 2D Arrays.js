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

// print2dArray(arr)
// console.log(" ")
// 
// console.log(sum2dArray(arr))
// console.log(" ")
// 
// modify2dArray(arr, 1, 1, 10)
// console.log(arr)
// 
// console.log(findMax(arr))

console.log(transpose(arr))