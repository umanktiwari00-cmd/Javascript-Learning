const name = "Umank";
const repoCount = 50
console.log(name+repoCount+"Value");


console.log(`hello my ${name} is and ${repoCount} is Value `);

const gameName = new String('Umank-hc'); // string is an object 

console.log(gameName.__proto__);

console.log(gameName.length); //for length of a string

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('K'));


const newString = gameName.substring(0,4); // 4 is not included


const anotherString = gameName.slice(-7,4); // can take negative value 
console.log(anotherString);

const newString1 = "  Umank  ";
console.log(newString1.trim());


const url = "https://umank.com";
const t=url.replace('umank','chiku'); 
console.log(t);

console.log(url.includes('Umank')); //true or false if this is present oor not

console.log(gameName.split('-')); // it splites the string according to parameter and present us as in the form of array.

let str1 = "UmankTiwari";
console.log(str1.startsWith("Umank")); // returns true or false
console.log(str1.endsWith("Tiwari"));


console.log(str1.lastIndexOf("a"));


console.log("Hi".repeat(3));