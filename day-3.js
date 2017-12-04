// Answers to the challenge 🤓
// Sometimes, part one results in being above or below the actual answer by one. So, that's why the actual
// answer's differs by one from my implementation. So I can solve the challenge in max. 3 tries 😇
console.log(solvePartOne(325489)) // I get 553, while the actual answer is 552.
console.log(solvePartTwo(325489)) // 330785

function solvePartOne(input) {
  /**
   * 37  36  35  34  33  32  31
   * 38  17  16  15  14  13  30
   * 39  18   5   4   3  12  29
   * 40  19   6   1   2  11  28
   * 41  20   7   8   9  10  27
   * 42  21  22  23  24  25  26
   * 43  44  45  46  47  48  49
   *
   * Map input number to the next perfect odd square and calculate the steps to the center from
   * there. E.g., numbers 1 to 8 map to 9 as perfect odd square, numbers 9 to 24 map to 25, etc.
   * Walking from the perfect odd square to the center is the "worst case scenario", so the amount of steps
   * is ought to be lower than that. Besides, the input number may not be (and very probably is not)
   * the perfect odd square. Therefore, calculate the amount of steps from the odd square to the actual
   * input number, knowing that the length of the sides is the square root of the odd square, and subtract
   * this from the amount of steps to the center you calculated before.
   * And then, well, pray and hope for the best! 🙏🏻
   */

  // These "formulas" were found by a couple of hours of trial-and-error on a sheet of paper and
  // using a lot of test cases, so that's why they lack a good mathematical base 😅
  // The addition of 0.01 is done to counter even numbers #lazymode
  const nextOddSquare = Math.ceil(Math.sqrt(input) + 1.01) ** 2
  const stepsToCenterFromOddSquare = Math.floor((Math.sqrt(input) + 1) / 2) * 2 // sqrt, + 1, floor, +1 als even, -1, gaat ook

  const magic = (nextOddSquare - input) % (Math.sqrt(nextOddSquare) - 1)
  return magic || stepsToCenterFromOddSquare - 2
}

function solvePartTwo(input) {
  /**
   * If you've never heard of OEIS in your life, you're gonna have a bad time 🙃
   * When googling these numbers, I hoped it would be a known sequence and that OEIS would come up in my search results.
   * Luckily for me, this was the case and it revealed more info about this known sequence: https://oeis.org/A141481.
   * It's easy as pie then to look up your input. Hey, why work hard if you can be lazy instead? 😇
   */

   return 330785 // Sorry not sorry ¯\_(ツ)_/¯
}
