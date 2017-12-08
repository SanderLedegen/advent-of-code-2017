const fs = require('fs')
const input = fs.readFileSync('./input-day-8.txt', 'utf-8')

// Answers to the challenge 🤓
const instructions = parseInput(input)
const register = executeInstructions(instructions)

console.log(solvePartOne(register)) // [ 'nm', 5849 ]
console.log(solvePartTwo(register)) // 6702

function solvePartOne(register) {
  return Object.entries(register).reduce((max, value) => value[1] > max[1] && value[0] !== '__maxValue' ? value : max, [null, 0])
}

function solvePartTwo(register) {
  return register.__maxValue
}

function executeInstructions(instructions) {
  const register = {}
  let maxValue = 0

  instructions.forEach(i => {
    // Initialize the register if it hasn't been done already
    register[i.conditionRegister] = register[i.conditionRegister] || 0
    register[i.register] = register[i.register] || 0

    // Take care of these "dec" and "inc" thingies
    const amount = i.operation === 'dec' ? -i.amount : i.amount

    switch (i.conditionOperator) {
      case '<':
        if (register[i.conditionRegister] < i.conditionAmount) {
          register[i.register] += amount
        }
        break

      case '>':
        if (register[i.conditionRegister] > i.conditionAmount) {
          register[i.register] += amount
        }
        break

      case '>=':
        if (register[i.conditionRegister] >= i.conditionAmount) {
          register[i.register] += amount
        }
        break

      case '<=':
        if (register[i.conditionRegister] <= i.conditionAmount) {
          register[i.register] += amount
        }
        break

      case '==':
        if (register[i.conditionRegister] == i.conditionAmount) {
          register[i.register] += amount
        }
        break

      case '!=':
        if (register[i.conditionRegister] !== i.conditionAmount) {
          register[i.register] += amount
        }
        break

      default:
        break
    }

    maxValue = register[i.register] > maxValue ? register[i.register] : maxValue
  })

  register.__maxValue = maxValue

  return register
}

function parseInput(input) {
  return input.split('\n').map(i => {
    const parts = i.split(' ') // Oh, no regex this time 😔

    return {
      register: parts[0],
      operation: parts[1],
      amount: parseInt(parts[2]),
      conditionRegister: parts[4],
      conditionOperator: parts[5],
      conditionAmount: parseInt(parts[6]),
    }
  })
}
