// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

var date = new Date(Date.now())
// console.log(date);
var year = date.getFullYear();

var month = date.getMonth();
var date = date.getDate();
var hours = date.getHours();
var minute = date.getMinutes();


//    - YYYY-MM-DD HH:mm

console.log(`${year}-${month}-${date} ${hours}:${minute}`);

//    - DD-MM-YYYY HH:mm

console.log(`${date}-${month}-${year} ${hours}:${minute}`);

//    - DD/MM/YYYY HH:mm

console.log(`${date}/${month}/${year} ${hours}:${month}`);
