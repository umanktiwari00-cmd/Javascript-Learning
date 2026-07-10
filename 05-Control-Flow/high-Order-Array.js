// for of 

// ["","",""]
// [{},{},{}]


const arr = [1,2,3,4,5]

for (const num of  arr) {
    console.log(num);
    
}


const greeting = "Hello World"

for(const greet of greeting) {
    console.log(greet);
    
}

// Maps -> key value pair insertion order, unique values

const map = new Map();
map.set('IN',"India")
map.set('USA',"States of America")

console.log(map)

for(const [key,value] of map) {
    console.log(key);
    
}

const myObject = {
    'game1' : 'nfs',
    'game2' : 'Spiderman'
}

// for(const [key,value] of myObject) {
//     console.log(key);
    
// } // not interable 


const myObject1 = {
    'js' : 'Javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "Swift by apple"
}

for(const key in myObject1) {
    console.log(myObject1[key]);
}


let lulu = ['js','cpp','Python','c']

for(const i in lulu) {
    console.log(lulu[i]);
    
}

// for(const key in map) {
//     console.log(key);
    
// }  ====> Not iterable 


