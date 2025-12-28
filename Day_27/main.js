const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World! and this is my express server')
})

app.post('/',(req,res)=>{
    console.log("This is post request")
    res.send("hellow world one ")
})

app.put('/',(req,res)=>{
    console.log("This is put request")
    res.send("hello one ")
})

app.delete('/',(req,res)=>{
    console.log("This is deleted request")
    res.send("hellow world one ")
})

app.get('/index',(req,res)=>{
     console.log("this is index.js")
    //  res.send("hello wrold index")
    res.sendFile('templates/index.html',{root:__dirname})
})

app.get('/api',(req,res)=>{
  res.send({a:2,b:3})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  