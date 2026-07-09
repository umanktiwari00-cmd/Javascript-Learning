// const user = {
//     username : "Umank",
//     price: 999,

//     welcomeMessage : function() {
//         console.log(`${this.username}, welcome to website `)
//         console.log(this)
//     }

}
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this); // Empty Object 


// // function chai() {
// //     let username = " Umank"
// //     console.log(this.username); // undefined
    
// // }

// // chai();




// // const chai = function() {
// //     let username = "hitesh"
// //     console.log(this.username); // undefined in function only defiend  in object
    

// // }
// // chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this); // undefined in function only defiend  in object
    

// }
// chai()

// // charcha on arrow function
// const addTwo = (num1,num2) => {
//     return num1+num2
// }



const addTwo = (num1,num2) =>  (num1+num2)
console.log(addTwo(3,4));


