// 25. In the following shopping cart add, remove, edit items

//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// if(shoppingCart !== "Meat"){
// console.log(shoppingCart.unshift("Meat"))
// }
//     - add Sugar at the end of you shopping cart if it has not been already added

// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// if(shoppingCart !== "Sugar"){
// console.log(shoppingCart.push("Sugar"))
// }

//     - remove 'Honey' if you are allergic to honey

// let allergic = true;

// if(allergic == true){
// console.log(shoppingCart.pop("Honey"))
// }


//     - modify Tea to 'Green Tea'



let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.splice(2, 1, "Green Tea");
console.log(shoppingCart );


