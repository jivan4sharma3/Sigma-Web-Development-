let box = document.getElementById("boxe")

console.log(box.nodeName)
console.log(box.textContent)
console.log(box.hidden)

box.innerHTML = "box four and i am last div"

console.log(box.attributes)

/// Create a new div using js
let div = document.createElement("div")
div.setAttribute("class", "created")
div.innerHTML = "The is created div"

document.querySelector(".container").append(div)   