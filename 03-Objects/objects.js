// singleton  object is always be when with constructor

// objects literals


// Object.create() --> Constructor


const mySym = Symbol("key1");


const jsUser = {
    name : "Umank",
    "full name" : "Umank  Tiwari",
    age : 20,
//    mySym : "Umank", // not working as symbol if want put in square
[mySym] : "Key1", // use square braces
    location : "Varansai",
    email : "Umank.google.com",
    lastloggeddays : ["Mondays","Saturday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); // that is why we use [] if our key are in strings as double quotes


// how to freeze

// Object.freeze(jsUser)
// jsUser.email = "Saragmam";
// console.log(jsUser)




jsUser.greeting = function() {
    console.log("Hello js User");
    
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
