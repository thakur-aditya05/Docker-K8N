// sum.test.js
import sum from './sum.js';

test('adds 1 + 2 to equal 3', () => {
    // input values 1 and 2 // expected output 3 
  expect(sum(1, 2)).toBe(3);
});

test('adds negative numbers correctly', () => {
  expect(sum(-5, -3)).toBe(-8);
});

test('adds positive + negative correctly', () => {
  expect(sum(7, -2)).toBe(5);
});

// describe('sum function tests', () => {
//   test('adds zero correctly', () => {
//     expect(sum(0, 5)).toBe(5);
//   });
//     test('adds large numbers correctly', () => {
//     expect(sum(1000, 2000)).toBe(3000);
//     });
// });




// this is manual 



// ab issko automate karna hai jest se