alert("This is program to show odd and even number in console");
const maxNumber = prompt("Insert maximum number");
// const insertNumber = Number(maxNumber);
function showEvenOddNumber(selectedNumber) {
  for (generateNumber = 1; generateNumber <= selectedNumber; generateNumber++) {
    // console.log(generateNumber);
    if (generateNumber % 2 !== 0) {
      console.log(`${generateNumber} is odd number`);
    } else if (generateNumber % 2 == 0) {
      console.log(`${generateNumber} is even number`);
    }
  }
}

showEvenOddNumber(maxNumber);
