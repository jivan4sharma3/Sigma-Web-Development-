import fs from "fs/promises" 

let a = await fs.readFile('jivan.txt')
let  b = await fs.writeFile("text.txt ",'this is amazing promise')

console.log(a.toString())