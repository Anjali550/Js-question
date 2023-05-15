// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let odd = 0;
let even = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      even = even + i;
    } else {
      odd = odd + i;
      console.log(i);
    }
  }
  console.log("Sum of even is " + even);
  console.log("Sum of odd is " + odd);