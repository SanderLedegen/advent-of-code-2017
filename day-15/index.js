// Input values
const startValueGeneratorA = 618
const startValueGeneratorB = 814

// Challenge constants
const factorGeneratorA = 16807
const factorGeneratorB = 48271
const division = 2147483647
const numOfIterationsPartOne = 40*1000*1000
const numOfIterationsPartTwo = 5*1000*1000

// Answers to the challenge 🤓
console.log(solvePartOne(startValueGeneratorA, startValueGeneratorB)) // 577
console.log(solvePartTwo(startValueGeneratorA, startValueGeneratorB)) // 316

function solvePartOne(startValueGeneratorA, startValueGeneratorB) {
  let matches = 0

  for (let ii = 0; ii < numOfIterationsPartOne; ii++) {
    startValueGeneratorA = getNextValueGenerator(startValueGeneratorA, factorGeneratorA) % division
    startValueGeneratorB = getNextValueGenerator(startValueGeneratorB, factorGeneratorB) % division

    if (doLowest16BitsMatch(startValueGeneratorA, startValueGeneratorB)) {
      matches += 1
    }
  }

  return matches
}

function solvePartTwo(startValueGeneratorA, startValueGeneratorB) {
  let matches = 0

  const valuesGeneratorA = []
  while (valuesGeneratorA.length < numOfIterationsPartTwo) {
    startValueGeneratorA = getNextValueGenerator(startValueGeneratorA, factorGeneratorA) % division

    if (startValueGeneratorA % 4 === 0) {
      valuesGeneratorA.push(startValueGeneratorA)
    }
  }

  const valuesGeneratorB = []
  while (valuesGeneratorB.length < numOfIterationsPartTwo) {
    startValueGeneratorB = getNextValueGenerator(startValueGeneratorB, factorGeneratorB) % division

    if (startValueGeneratorB % 8 === 0) {
      valuesGeneratorB.push(startValueGeneratorB)
    }
  }

  for (let ii = 0; ii < valuesGeneratorA.length; ii++) {
    if (doLowest16BitsMatch(valuesGeneratorA[ii], valuesGeneratorB[ii])) {
      matches += 1
    }
  }

  return matches
}

function getNextValueGenerator(previousValue, factor) {
  return previousValue * factor
}

function doLowest16BitsMatch(a, b) {
  /**
   * Aaaah yes, this is my kinda shit! 😎 I absolutely love fiddling with bits and other low-level shit ❤️
   * In order to speed things a lil' up, I chose to apply a gentle bitmask. The plebs can still choose to
   * use something like `return a.toString(2).slice(-16) === b.toString(2).slice(-16)`.
   */
  return (a & 0xFFFF) === (b & 0xFFFF)
}
