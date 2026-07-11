// // function saveMyName() {
// //     console.log("My name is Umank Tiwari");
// // }
// // saveMyName();

// function add(n1,n2) { 
//     if(username!) {
//         console.log("Please enter a username");
//         return;
//     }
//    let res = n1 + n2;
   
// } 
// const res = add(3,5);

// function loginUser(username = "Umank") {
//     return `${username} just logged in`;
// }
// // console.log(loginUser("Uamnk"))


// for multiple value we use ... rest operator

function addCalculatePrice(...num1) {
    return num1
}
console.log(addCalculatePrice(200,400,500));


const user = {
    ₹username  : "Uamnk",
    price : " 199"
}

function handleUser(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleUser(user)




const myNewArray = [200,300,400] 

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
