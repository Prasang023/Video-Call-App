require('dotenv').config()
const express = require("express")
const app = express()
const http = require("http")
const path = require('path');
app.use(express.static("public"));


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Listening on port 5000...")
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"))
})

// app.get('/user/:roomname/:type', (req, res) => {
//     console.log("hahahahahahhahahhahahahhahahahhahaha")
//     res.send(req.params)
// })

// app.get('/receiver', (req, res) => {
//     res.sendFile(path.join(__dirname + "/receiver.html"))
// })