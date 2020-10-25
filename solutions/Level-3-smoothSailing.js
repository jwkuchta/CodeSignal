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

// PROBLEM 2 SOLUTION

function commonCharacterCount(s1, s2) {
    let count = 0
    let counter = {}
    for (let char of s1) {
      if (s2.includes(char)) {
        if (!counter[char]) {
          counter[char] = 1
        } else {
          counter[char] += 1
        }
      }
    }
    for (let char of s2) {
      if (counter[char]) {
        counter[char] -= 1
        count++
      }
    }
    return count
}

// PROBLEM 3 SOLUTION
function isLucky(n) {
    let arr = n.toString().split('')
    let len = arr.length
    let firstHalf = arr.slice(0, len/2)
    let secondHalf = arr.slice(len/2)
    let total1 = 0
    let total2 = 0
    console.log(firstHalf, secondHalf)
    firstHalf.map(num => total1 += parseInt(num))
    secondHalf.map(num => total2 += parseInt(num))
    console.log(total1, total2)
    if (total1 === total2) {
      return true
    }
    return false
}

