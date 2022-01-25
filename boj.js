// add, commit, push 해주기!!! /dev/stdin
let fs = require("fs");
let input = fs.readFileSync("./data.txt").toString().trim().split("\n");

const d = (n) => {
  let num = String(n);
  let nextNum = n;
  for (let i = 0; i < num.length; i++) {
    nextNum += Number(num[i]);
  }
  return nextNum;
};

let dList = [];
// 9973
for (let i = 1; i < 9990; i++) {
  dList.push(d(i));
}

let dSortedList = dList.sort((a, b) => a - b);

for (let i = 1; i < 10000; i++) {
  if (!dSortedList.includes(i)) console.log(i);
}
