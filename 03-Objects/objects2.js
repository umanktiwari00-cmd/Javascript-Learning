// constructor
const tinder = new Object() // singelton object

console.log(tinder);


tinder.id = "!23432"
tinder.name = "Umank"
tinder.isloggedIn = false


const regualarUser = {
    email : "somebnody@gmaik.com",
    fullname : {
        userfullname : {
            firstname : "Umank",
            lastname : "Tiwari"
        }
    }
}
// console.log(regualarUser.fullname.userfullname.firstname);


const obj1 = {
    a : 1 ,
    b : 2,
    c : 3
}
const obj2 = {
    d : 4 ,
    e :5
}

// const obj3 = Object.assign({},obj1,obj2); // source and target as empty bracket and other objets

const obj3 = {...obj1,...obj2};
console.log(obj3);



// values for database 

const user = [
    {
        id : 1 ,
        email : "u@gmail.com"
    }
];
console.log(user[0].email);


console.log(Object.keys(tinder));


console.log(Object.values(tinder));

console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));

