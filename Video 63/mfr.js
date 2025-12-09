let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

// second method for prinnting the sq of elements belo and above 


// --------------------------map() methode
// using map()
let newArr = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr)



// ---------------------------filter() methode

// using filter()
const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))




// -----------------------------reduce methode
//use of reduce methode --> arr.reduce()
let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))


// can be  application   of it 
// used to make fuction of  factorial   
let arr3 = [1,2,3,4,5,6]

const fact = (a, b)=>{
    return a*b
}

console.log(arr3.reduce(fact))

