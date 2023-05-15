// 12. Use the Date object to do the following activities
let d = new Date();
//     - What is the year today?
console.log(d.getFullYear());

//     - What is the month today as a number?
console.log(d.getMonth());
//     - What is the date today?
console.log(d.getDate());
//     - What is the day today as a number?
console.log(d.getDay());
//     - What is the hours now?
console.log(d.getHours());
//     - What is the minutes now?
console.log(d.getMinutes());
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Date.now("Jan 1, 1970"));