//  Primitive data type -> call by value

// 7 tpes : String , Number , Boolean , null , undefined ,Symbol(use to make unique),BigInt

//  refrence type --> Non primitive Data type
// array and objects , Function 

// java script --> Dynamic type lanuage 


// const score  = 100
// const scoreValue = 100.3;
// const isLogged = false;

// const outsideTemp = null

// let userEmail;

// const heroes = ["shaktiman","naagraj","doga"]
// let myobj= {
//     name : "Umank",
//     age : 22,

// };

// const myfunct = function() {
//     console.log("Hello World");
    
// }

// console.log(typeof heroes);


//  ******************************* Memory ---> Stack , Heap ****************************

// Stack  ---> Stores into primitive data used the value as a copy
// Heap ----> Stores into  Non-primitive Data here used as a refrence of the value 


 let myYouTubeName = "tiwariumank.com";
 let anotherName = myYouTubeName

 anotherName = "biscuitorcode";
 console.log(anotherName);
 console.log(myYouTubeName);
 

 let userone = {
    name : "Umank"
 };
 let usertwo = userone;

 usertwo.name = "Hitesh";
 console.log(userone);