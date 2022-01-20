// add, commit, push 해주기!!! /dev/stdin
let fs = require("fs");
let input = fs.readFileSync("./data.txt").toString().trim().split("\n");

let num = input.length - 1;

let i = 0;
let answer = "";

while (i < num) {
  let listNum = input[i].split(" ").map((v) => +v);
  answer += listNum[0] + listNum[1] + "\n";

  i++;
}

console.log(answer.trim());
