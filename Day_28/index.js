const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

// this is middleware.
app.use((req,res,next)=>{
    console.log("LOGGED")
    next()
})

app.use((req,res,next)=>{
    console.log("LOGGED 2")
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello World in about route!')
})

app.get('/contact', (req, res) => {
  res.send('Hello World! in contact route !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
