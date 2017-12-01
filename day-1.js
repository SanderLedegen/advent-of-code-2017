const fs = require('fs')
const input = fs.readFileSync('./input-day-1.txt', 'utf-8')

// Test cases 🤔
// console.log(`"1122" -> ${solvePartOne('1122')}`) // 3
// console.log(`"1111" -> ${solvePartOne('1111')}`) // 4
// console.log(`"1234" -> ${solvePartOne('1234')}`) // 0
// console.log(`"91212129" -> ${solvePartOne('91212129')}`) // 9
// console.log(`"911229" -> ${solvePartOne('911229')}`) // 12

// console.log(`"1212" -> ${solvePartTwo('1212')}`) // 6
// console.log(`"1221" -> ${solvePartTwo('1221')}`) // 0
// console.log(`"123425" -> ${solvePartTwo('123425')}`) // 4
// console.log(`"123123" -> ${solvePartTwo('123123')}`) // 12
// console.log(`"12131415" -> ${solvePartTwo('12131415')}`) // 4

// Answers to the challenge 🤓
console.log(solvePartOne(input)) // 1341
console.log(solvePartTwo(input)) // 1348

function solvePartOne(input) {
  const characters = [...input]

  return characters.reduce((sum, value, index) => {
    const indexToUse = index + 1 < characters.length ? index + 1 : 0;
  
    return value === characters[indexToUse] ? sum + +value : sum
  }, 0)
}

function solvePartTwo(input) {
  const characters = [...input]
  
  return characters.reduce((sum, value, index) => {
    const indexToUse = (index + characters.length / 2) % characters.length;
  
    return value === characters[indexToUse] ? sum + +value : sum
  }, 0)
}
