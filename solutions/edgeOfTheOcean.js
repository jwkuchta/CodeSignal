// PROBLEM #1 SOLUTION

function adjacentElementsProduct(inputArray) {
    let max = inputArray[0] * inputArray[1]
    let total
    for (let i = 1; i < inputArray.length-1; i++) {
        total = inputArray[i] * inputArray[i+1]
        if (total > max) {
            max = total
        }
    }
    return max
}

// PROBLEM #2 SOLUTION

function shapeArea(n) {
    if (n === 1) {
        return 1
    } else {
        return (shapeArea(n-1) + (4 * (n-1)))
    }
}

// PROBLEM #3 SOLUTION

function makeArrayConsecutive2(statues) {
    let sorted = statues.sort((a, b) => a-b)
    let count = 0
    for (let i=0; i < sorted.length-1; i++) {
        if (sorted[i]+1 !== sorted[i+1]) {
            count+=sorted[i+1]-sorted[i]-1
        }
    }
    return count
}

// PROBLEM #4 SOLUTION

function almostIncreasingSequence(sequence) {
    let count = 0
    for (let i = 0; i < sequence.length-1; i++) {
        if (sequence[i] >= sequence[i+1]) {
            count+=1
            if (count > 1) return false
        } 
        if (sequence[i] >= sequence[i+2] && sequence[i+1] >= sequence[i+3]) {
            return false
        }
    }
    return true
}

// PROBLEM #5 SOLUTION

function matrixElementsSum(matrix) {
    let total = 0
    for (let i = 0; i < matrix.length-1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
              let next = i + 1
              console.log(next)
              matrix[next].splice(j, 1, 0)
            }
        }
    } 
    matrix.flat().map(el => total += el)
    return total
}