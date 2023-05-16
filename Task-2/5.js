const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


// ---1--- Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e);



// ---2--- Destructure and assign the elements of countries array to fin, est, sw, den, nor
let[fin, est, sw, den, nor] = countries;
console.log(sw);


// ---3--- Destructure the rectangle object by its properties or keys.
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);


// ---4--- Iterate through the users array and get all the keys of the object using destructuring
users.forEach((e) => {
      let { name, scores, skills, age } = e;
      console.log(name, scores, skills, age);
    });
// ---5--- Find the persons who have less than two skills

users.forEach((e) => {
  let { skills} = e;
  if (skills.length < 2) {
    console.log(e.name);
  }
});


// - Create a closure which has one inner function

function sayHello() {
  var name = "anjali";
  function sayName() {
    console.log(name);
  }
  sayName();
}

console.log(sayHello());



// - Create a closure which has three inner functions
function sayHello() {
  var name = "Anjali";
  function sayFistName() {
    var fname = " Panwar";
    function sayLastName() {
      var lname = " Saini";
      function sayName() {
        console.log(name + fname + lname);
      }
      sayName();
    }
    sayLastName();
  }
  sayFistName();
}