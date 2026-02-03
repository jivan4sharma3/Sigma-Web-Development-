const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/passwordManager').then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log('Error connecting to MongoDB', err)
})

// create a schema for password manager
const passwordSchema = new mongoose.Schema({
    website: String,
    username: String,
    password: String
})
const Password = mongoose.model('Password', passwordSchema)

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// route for saving password 
// route for get data 
app.get('/password-manager', async (req, res) => {
    try {
        const passwords = await Password.find()
        res.json(passwords)
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch passwords' })
    }
})

// route for adding password
app.post('/password-manager', (req, res) => {
    const { website, username, password } = req.body
    const newPassword = new Password({
        website: website,
        username: username,
        password: password
    })
    newPassword.save().then(() => {
        res.send('Password saved successfully')
    }).catch((err) => {
        res.status(500).send('Error saving password')
    })
})

// route of editing data
app.put('/password-manager', async (req, res) => {
    console.log(req.body)
    let id = req.body._id
    console.log(id)
    await Password.findByIdAndUpdate(id), {
        website: req.body.website,
        username: req.body.username,
        password: req.body.password
    }
    res.send('Password updated successfully')
})


app.post('/pass-delete', async (req , res) =>{
    await Password.findByIdAndDelete(req.body._id)
    res.send(true)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
