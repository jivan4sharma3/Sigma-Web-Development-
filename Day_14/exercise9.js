let num1 = prompt("Enter first number: ")
let operation = prompt("Enter operation")
let num2 = prompt("Enter second number: ")

let random = Math.random() * 100

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
}

if (random > 0.1) {
    alert(`the result is ${eval(`${num1} ${operation} ${num2}`)}`)
} else {
    operation = obj[operation]
}