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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  