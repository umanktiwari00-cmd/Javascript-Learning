//Imediate invoke function expression iife





(function biscuit() {
    console.log('D.B Connected');
    
} ) (); // Exection parenthensis : A function which imediately called a polution is occured due to global scope so to avoid that we use iife





( (name) => {
    console.log(name ,"D.B CONNECTED TO THE DATABASE"); 
    
}
)("Umank"); // unnamed iife


( function aurcode()  {
    console.log("D.B CONNECTED TO THE DATABASE"); 
    
} //named iife
)();

