const marvel_heroes = ["thor", "Ironman", "spiderman"];

const dc_heroes = ["superman","flash","batsman"];

// marvel_heroes.push(dc_heroes); // array inside array 

// console.log(marvel_heroes[3][1]); 

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);


const all_new_heroes = [...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);


const another_Array = [1,2,3,[4,5,6],7,[4,5,7,7,[6,6,6,6]]];

const real_another_array = another_Array.flat(Infinity);

console.log(real_another_array)


console.log(
Array.isArray("hitesh")
)

// use Array.from convert string into arary 


console.log(Array.from({name : "Umank"})) // interesting situation


let score1 = 100;
let score2 = 200;
let score3 = 300;


// console.log(Array.of(score1,score2,score3));

// isArray and From Array 
