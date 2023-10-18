const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/about', (req, res) => {
    res.send("About Us")
})

app.get('/products', (req, res) => {
    res.send("Products")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})