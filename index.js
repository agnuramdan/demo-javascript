console.log("This is demo for JavaScript");

// for loop
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
