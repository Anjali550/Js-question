// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
 let ages2= ages.sort();

 let ageMax = Math.max(...ages2);
 let ageMin = Math.min(...ages2);
console.log(ageMax);
console.log(ageMin);

// Find the median age(one middle item or two middle items divided by two)
let median;

if(ages2.length % 2 !==0){
    let middleIndex = Math.floor(ages2.length/2)
    median = ages2[middleIndex]
}
else{
    let middleIndex = Math.floor(ages2.length/2)
    median = (ages2[middleIndex] + ages2[middleIndex-1])
}
console.log(median);

// - Find the average age(all items divided by number of items)

let sum =0;
ages.forEach(e =>{
sum += e;
});
console.log(sum);

// Find the range of the ages(max minus min)
console.log(` the range is ${ageMax- ageMin}`);
