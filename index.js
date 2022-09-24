console.log("This is demo for JavaScript");

// for loop
// change the number that divisble by 3 to kebab and number that divisible by 4 to burger

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

// even and odd number

let evenOddNumberResult = "";

for (evenOdd = 1; evenOdd <= 10; evenOdd++) {
  // console.log(evenOdd);
  let loopResult = evenOdd;

  if (evenOdd % 2 !== 0) {
    loopResult = `${evenOdd} is odd number`;
  } else if (evenOdd % 2 === 0) {
    loopResult = `${evenOdd} is even number`;
  }

  evenOddNumberResult = loopResult;
  console.log(evenOddNumberResult);
}
