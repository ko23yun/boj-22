// add, commit, push 해주기!!! /dev/stdin
let fs = require("fs");
let input = fs.readFileSync("./data.txt").toString().trim().split("\n");

let num = Number(input.shift());
let list = input
  .shift()
  .split(" ")
  .map((v) => +v);

let max = list[0];
let min = list[0];

for (let i = 0; i < num; i++) {
  if (max < list[i]) {
    max = list[i];
  }

  if (min > list[i]) {
    min = list[i];
  }
}

console.log(min, max);
