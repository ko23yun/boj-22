// add, commit, push 해주기!!! /dev/stdin
let fs = require("fs");
let input = fs
  .readFileSync("./data.txt")
  .toString()
  .split("\n")
  .map((v) => +v);

let max = input[0];
let count = 0;

for (let i = 1; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i];
    count = i;
  }
}

console.log(max);
console.log(count + 1);
