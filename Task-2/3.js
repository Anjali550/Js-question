let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//----1-----  Explain the difference between forEach, map, filter, and reduce.
//  #forEach():- This  method calls a function for each element in an array.
//               The forEach() method is not executed for empty elements.
//  #map():- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//  #filter():- The filter() method creates a new array filled with elements that pass a test provided by a function.
//              The filter() method does not execute the function for empty elements.
//             The filter() method does not change the original array.


// ---2---- Use forEach to console.log each name in the names array.

// names.forEach(e => {
//   console.log(e);
// })


// ----3---- Use forEach to console.log each country in the countries array.

// countries.forEach(e => {
//   console.log(e);
//  })

// ---4--- Use forEach to console.log each number in the numbers array.

// numbers.forEach(e => {
//   console.log(e);
//  })


// ---5--- Use map to create a new array by changing each country to uppercase in the countries array.
// let nCountries = countries.map((e) => e.toUpperCase())
// console.log(nCountries);


// ---6--- Use map to create an array of countries length from countries array.
// let nCountries = countries.map((e) => e.length)
// console.log(nCountries);



// ----7---- Use map to create a new array by changing each number to square in the numbers array
// const  roots = numbers.map((num) => num*num);
// console.log(roots);


// ----8---- Use map to change to each name to uppercase in the names array
// const uPPer = names.map((e) => e.toUpperCase());
// console.log(uPPer);



// TODO // - Use map to map the products array to its corresponding prices.
// ----9---- Use filter to filter out countries containing land.
// let landArray = countries.filter((e) => e.includes("land"));
// console.log(landArray);

// ----10---- Use filter to filter out countries having six character.
// let sixChar = countries.filter((e)  => e.length == 6);
// console.log(sixChar);


// ----11---- Use filter to filter out countries containing six letters and more in the country array.
// let sixChar = countries.filter((e)  => e.length >= 6);
// console.log(sixChar);

// ----12---- Use filter to filter out country start with 'E';
// let eChar = countries.filter((e)  => e.startsWith("E"));
// console.log(eChar);


// ----13---- Use filter to filter out only prices with values.
// let price1 = products.filter((e)  => typeof e.price == "number");
// console.log(price1);


// ----14---- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// function getStringLists(list){
//   let stringList = list.filter((e) => typeof e == "string");
//     console.log(stringList);
// }


// ----15---- Use reduce to sum all the numbers in the numbers array.
// let sum = numbers.reduce((p, c) => p +c );
// console.log(sum);
// ----16---- Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// ----17---- Explain the difference between some and every.


// ----18---- Use some to check if some names' length greater than seven in names array.
// function isGreaterThenSeven(e) {
//   return e > 7 == 0;
// }
// console.log(names.some(isGreaterThenSeven));


// ----19---- Use every to check if all the countries contain the word land.
// const isContainLand = (e) => e.includes("Land");
// console.log(countries.every(isContainLand));

// ----20---- Explain the difference between find and findIndex.
// find:-the find method returns the element value.
// findIndex:-the findIndex method returns the element index.



// ----21---- Use find to find the first country containing only six letters in the countries array.
// console.log(countries.find((e) => e.length == 6));


// ----22---- Use findIndex to find the position of the first country containing only six letters in the countries array
// console.log(countries.findIndex((e) => e.length == 6));

// ----23---- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
// console.log(countries.findIndex((e) => e == "Norway"));


// ----24---- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
// console.log(countries.findIndex((e) => e == "Russia"));
