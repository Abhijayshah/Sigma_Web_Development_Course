let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj1 = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
let obj2 = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}
let obj3 = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}
