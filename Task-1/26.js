// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
var cList = ["Ethiopia", "India", "Japan", "Berlin", "Spain"];

if (cList.includes("Ethiopia")) {
  console.log("Ethiopia".toUpperCase());
} else {
  cList.push("Ethiopia");
  console.log(cList);
}