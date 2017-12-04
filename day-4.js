const fs = require('fs')
const input = fs.readFileSync('./input-day-4.txt', 'utf-8')

// Answers to the challenge 🤓
console.log(solvePartOne(input)) // 451
console.log(solvePartTwo(input)) // 223

function solvePartOne(input) {
  const lines = input.split('\n')
  let numOfValidPassphrases = 0

  lines.forEach(line => {
    const words = line.split(' ')
    const set = new Set(words)

    if (set.size === words.length) {
      numOfValidPassphrases += 1
    }
  })

  return numOfValidPassphrases
}

function solvePartTwo(input) {
  const lines = input.split('\n')
  let numOfValidPassphrases = 0

  lines.forEach(line => {
    const words = line.split(' ')
    let validLine = true
    
    for (let ii = 0; ii < words.length && validLine; ii++) {
      for (let jj = 0; jj < words.length && validLine; jj++) {
        if (ii === jj) {
          continue
        }

        if (isAnagram(words[ii], words[jj])) {
          validLine = false
        }
      }
    }

    if (validLine) {
      numOfValidPassphrases += 1
    }
  })

  return numOfValidPassphrases
}

function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false
  }

  const charOccurencesA = createCharacterOccurrenceMap(a)
  const charOccurencesB = createCharacterOccurrenceMap(b)

  // Luckily, a shallow compare is sufficient for strings and numbers 😊
  return isShallowlyEqual(charOccurencesA, charOccurencesB)
}

function createCharacterOccurrenceMap(word) {
  // This method counts the occurences of each character in a word.
  // E.g. 'yolo' gets transformed into {'y': 1, 'o': 2, 'l': 1}.
  return [...word].reduce((map, char) => {
    map[char] = map[char] ? map[char] + 1 : 1

    return map
  }, {})
}

function isShallowlyEqual(a, b) {
  return Object.keys(a).every(key => b[key] === a[key]) && Object.keys(b).every(key => a[key] === b[key])
}
