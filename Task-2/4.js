// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']
// ---


// 1- create an empty set
let emptySet = new Set();

// 2- Create a set containing 0 to 10 using loop.

for (let i=0; i<=10; i++){
    emptySet.add(i);
}
console.log(emptySet);

// 3- Remove an element from a set
emptySet.delete(3);
console.log(emptySet);

// 4- Clear a set
emptySet.clear();
console.log(emptySet);

// 5- Create a set of 5 string elements from array
let ar = ["Hello", "Hola", "Am", "YOLO", "HO"];
let setFromString = new Set(ar);
console.log(setFromString);

// 6- Create a map of countries and number of characters of a country.
