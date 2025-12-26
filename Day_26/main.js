const fs = require("fs")

// console.log(fs)

console.log("Starting ")
// fs.writeFileSync("jivan.text","Jivan is good boy")
fs.writeFile("jivan1.txt","Jivan sharma is good boys and he is learn backend with harry",()=>{
    console.log("done!")
    fs.readFile('jivan.txt',(error,data)=>{
        console.log(data.toString )
        console.log(error)
    })
})

fs.appendFile("jivan.txt","and he is good one ",(e,d)=>{
    console.log(d+"this is data,")
})

console.log("Ending ")