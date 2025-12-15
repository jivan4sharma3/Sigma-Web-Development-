let a = [2, 3, 4, 5, 5]

// a.forEach((value, index , arr)=>{

//     console.log(value)
//     console.log(index)
//     console.log(arr)
// })

// let obj={
//     a:1,
//     b:3,
//     c:4
// }
// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;

//     const element = obj[key];
//     console.log(element)

// }


// for (const iterator of a) {
//     console.log(iterator)
// }

// let newArr = []

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     newArr.push(element**2)

// }
let newArr = a.map((e) => {
    return e ** 2
})
console.log(newArr)

const greaterThan = (e) => {
    if (e >5){
          return true
    }else{
        return false
    }
}

console.log(a.filter(greaterThan))