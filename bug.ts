function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; // Bug: Should be a - b
}

let result1 = add(5, 3); // result1: 8
let result2 = subtract(10, 4); // result2: 6