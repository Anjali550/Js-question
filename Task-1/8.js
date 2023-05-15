// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
let c = 'You cannot end a sentence with because because because is a conjunction';
console.log(c.search("because"));
console.log(c.indexOf("because"));
console.log(c.split(" ").indexOf("because"));
