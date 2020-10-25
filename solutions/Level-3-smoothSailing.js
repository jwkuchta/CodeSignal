// PROBLEM 1 SOLUTION

function allLongestStrings(inputArray) {
    let counter = {}
    for (let string of inputArray) {
        if (!counter[string.length]) {
            counter[string.length] = [string]
        } else {
            counter[string.length].push(string)
        }
    }
    let sorted = Object.keys(counter).sort((a, b) => b-a)
    let longest = sorted[0]
    console.log(longest)
    return counter[longest]
}