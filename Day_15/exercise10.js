
let first, second, third

// first word
let rand = Math.random()
if (rand < 0.33) {
    first = 'Crazy'
} else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing"
} else {
    first = "Fire"
}

// second word
let rand1 = Math.random()
if (rand1 < 0.33) {
    second = 'Engine'
} else if (rand1 < 0.66 && rand1 >= 0.33) {
    second = "Foods"
} else {
    second = "Garments"
}

// third word
let rand2 = Math.random()
if (rand2 < 0.33) {
    third = 'Bros'
} else if (rand2 < 0.66 && rand2 >= 0.33) {
    third = "limited"
} else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)