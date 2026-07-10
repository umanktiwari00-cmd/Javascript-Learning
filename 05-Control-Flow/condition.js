// < > <= >= != == === !== 





const balance = 1000;


if(balance > 500) {
    console.log("test");
    
}

if(balance < 500) {
    console.log("less than 500")
}
else if(balance<750){

console.log("750");

    }
    

    const userloggedin = true 
    const debitcart = true;

    const loggedInFromGoogle = false ;
    const loggedInFromEmail = true;

    if(userloggedin && debitcart) {
        console.log("Allow to but course");
        
    }
if(loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged in ");
    
}


// Switch Case 


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3;

switch(month) {
    case 1 : console.log("January");
        break;
    case 2 : console.log("February");
        break;
    case 3 : console.log("March");
        break;
    
    default :
            console.log("default case match ");
                break;
    
}


const userEmail = "Umank.ai";
if(userEmail) {
    console.log("GOt user Email");
    
}
else {
    console.log("Don't have a user Email")
}
// Truthy or falsy value 
// Falsy : false,0,,-0,BigInt 0n,"",null,undefined,NaN
//Truthy : [],true,1,"0","false"," ",{},function() {} 

if(userEmail.length()===0) {
    console.log("Array is Empty");
    
}
const emptyObj = {};
if(Object.keys(emptyObj).length===0) {
    console.log("Object is empty ");
    
}


//Nullish coalesching Operator (??) : null undefined
// for safety check if the value is null or undefined we take the other value 
let val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

val1 = null ?? 10 ?? 15; // 10 

// Ternary Operator 
// condition ? true : false 
const iceTea = 100
iceTea >= 80 ? console.log("GExkeb") : console.log("dwjehvcjakhe");

