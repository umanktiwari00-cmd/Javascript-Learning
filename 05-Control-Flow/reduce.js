const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`${acc} and currval  : ${currval}`);
    
//     return acc+currval
// },0)



const myTotal = myNums.reduce((acc,curr) => acc+curr , 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName : 'js',
        price : 2999
    },
    
    {
        itemName : 'python',
        price : 999
    },
    
    {
        itemName :  'Mobile-Development',
        price : 5999
    },
    
    {
        itemName :  'Data-Scientist',
        price : 12999
    }
]

const pricetopay = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(pricetopay);
