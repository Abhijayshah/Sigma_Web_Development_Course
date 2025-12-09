// factorial calculation // 

// by using reduce method we find factorial 
let a = 6
function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}
console.log(factorial(a))




// basic methode for factorial calculation 
let b=6
function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}
console.log(facFor(b))