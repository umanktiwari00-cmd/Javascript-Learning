// // let mydate = new Date();
// // console.log(mydate.toString());
// // console.log(mydate.toDateString());
// // console.log(mydate.toLocaleString());

// // //  date is an object ;


// // let myCreated = new Date(2023,0,28,5,3);
// // console.log(myCreated.toLocaleString())


// let mycreatedadte = new Date("2023-01-14");
// // console.log(mycreatedadte);


// let myTimeStamp  = Date.now();
// console.log(myTimeStamp) // in milliseconds
// console.log(mycreatedadte.getTime()); // provides in millisecond

// console.log(Math.floor(myTimeStamp/1000)) // in milliseconds


let newDate = new Date();

console.log(newDate.getMonth());   // provide 0 as jan 
 

newDate.toLocaleString('default',{
    weekday : "long"
})


