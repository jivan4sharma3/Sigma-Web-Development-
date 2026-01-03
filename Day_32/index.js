const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

mongoose.connect("mongodb://localhost:27017/SigmaWeb").then(() => {
    console.log("Database Connected")
}).catch((err) => {
    console.log(err)
})

const SigmaSchema = mongoose.Schema({
    name: String,
    price: Number,
    desc: String,
})

const SigmaModel = mongoose.model("courses", SigmaSchema)

app.get('/', async (req, res) => {
    // res.send('Hello World!')
    //  let tasks = await Todo.create({
    //     title: req.body.title,
    //     task: req.body.task,
    // })
    // console.log(tasks)
    // res.send(tasks)
    let all_Course  = await SigmaModel.create({
        name:"jivna sharm",
        price:124,
        decs:"this is amazing course . and you can easly learn about web development."
    }) 

    res.send("All data is inserting.")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
