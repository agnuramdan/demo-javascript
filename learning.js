// learning for interation

let resultNumber = "";

for (let number = 1; number <= 20; number++) {
  // console.log(number);
  let loopNumber = number;

  if (number % 3 === 0) {
    loopNumber = "kebab";
  } else if (number % 4 === 0) {
    loopNumber = "burger";
  }

  resultNumber = loopNumber;
  console.log(resultNumber);
}

console.log(24 % 4 === 0);
