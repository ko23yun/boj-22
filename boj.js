// add, commit, push 해주기!!! /dev/stdin
let fs = require("fs");
let input = fs.readFileSync("./data.txt").toString().trim();

// 1000 이하의 정수
// 1 ~ 9 -> 등차수열
// 10 ~ 99 -> 등차수열
// 100 ~ 999 -> 100의 자리, 10의 자리, 1의 자리 숫자들이 등차수열인지 확인 필요

let getNumber = Number(input);
let answer = getNumber;

let checkNumber = (num) => {
  if (num <= 99) {
    return;
  } else if (num >= 100) {
    let numString = String(num);
    let subtract = numString[0] - numString[1] == numString[1] - numString[2];
    for (let i = 100; i <= num; i++) {
      if (subtract) answer++;
    }
  }
  console.log(answer);
};
