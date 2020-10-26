// PROBLEM 1
a = [50, 60, 60, 45, 70]

function alternatingSums(a) {
    let len = a.length
    let team1 = []
    let team2 = []
    while(a.length > 0) {
      team1.push(a.shift())
      team2.push(a.shift())
    }
    if (len % 2 !== 0) {
      team2 = team2.slice(0, -1)
    }
    total1 = team1.reduce((total, w) => total + w, 0)
    total2 = team2.reduce((total, w) => total + w, 0)
    return [total1, total2]
}

alternatingSums(a) // => [180, 105]

// PROBLEM 2
