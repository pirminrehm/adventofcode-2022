const fs = require('fs');
const input = fs.readFileSync('./input/day1.txt').toString('utf-8');
const inputList = input
  .split('\n\n') //
  .map((l) =>
    l //
      .split('\n')
      .map((n) => Number(n))
  );

const calPerElf = inputList
  .map((c) => c.reduce((a, b) => a + b, 0))
  .sort()
  .reverse();

console.log('part 1:', calPerElf[0]);
console.log('part 2:', calPerElf[0] + calPerElf[1] + calPerElf[2]);
