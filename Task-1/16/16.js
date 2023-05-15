// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let r = prompt("Radius of circle")
const pi = 3.14;
let circle = pi * r * r;
let c = 2 * pi * r;

alert( `The area of circle Is ${circle}.
and The Circumference is ${c}`);