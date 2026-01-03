const express = require('express')
const app = express()
const port = 3000

// Setting a view engine ejs
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    let title = "Welcome to my Website"
    arr = ["jivan",3,4,342,,234]
    // res.send('Hello World!')
    // res.sendFile("template/index.html", { root: __dirname })
    res.render("index", { title: title , arr })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
