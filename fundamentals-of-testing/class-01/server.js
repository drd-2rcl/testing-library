const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;

// console.log(`${result} is not equal to ${expected}`)
if (result !== expected) {
  console.log(`Error: ${result} is not equal to ${expected}`)
} else {
  console.log(`Success: ${result} is equal to ${expected}`)
}

result = subtract(7, 3)
expected = 4
if (result !== expected) {
  console.log(`Error: ${result} is not equal to ${expected}`)
} else {
  console.log(`Success: ${result} is equal ${expected}`)
}