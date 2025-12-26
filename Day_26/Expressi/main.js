const express = require('express')
const app = express()
const port = 3000

// app.use( )

//app.get , app.post , app.put // app.delete
app.get('/', (req, res) => {
  res.send('Hello World! and welcome to my first express sever')
})

app.get('/about',(req,res)=>{
    res.send("Welcome to about page.")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
