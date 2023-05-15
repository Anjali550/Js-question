// 28. Use for loop to iterate from 0 to 100 and print only prime numbers


var div;
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

function isPrime(n) {
  if (n == 4) {
    return false;
  }
  for (let i = 2; i < Math.floor(n / 2); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}