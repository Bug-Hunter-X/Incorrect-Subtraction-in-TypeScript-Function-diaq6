# Incorrect Subtraction in TypeScript Function

This repository demonstrates a common error in TypeScript: an incorrect calculation within a function.

The `subtract` function in `bug.ts` contains a bug where it adds the two input numbers instead of subtracting them.

The corrected version is in `bugSolution.ts`.

## How to reproduce the bug
1. Clone this repository.
2. Compile and run `bug.ts`.
3. Observe that `subtract(10, 4)` returns 14 instead of 6.

## How to fix the bug
1. Replace `return a + b` with `return a - b` in the `subtract` function of `bug.ts`.
2. Compile and run the corrected code.