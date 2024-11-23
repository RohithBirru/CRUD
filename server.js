
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const employeeRoutes = require("./Routes/employeeRoutes")
const ejs = require("ejs")

const app = express()
const port = process.env.port || 5000

//server side rendering
app.set('view engine', 'ejs') //register ejs
app.use('/grapes', (req, res)=> {
    res.render('samplepage')
})

//client side rendering
dotenv.config()
app.use(bodyparser.json()) // mvc

mongoose.connect(process.env.MONGO_URI)
.then( ()=> {
    console.log("connected to Database");
})
.catch((error) => {
    console.log("not connected to DB", error)
})

app.use('/employees', employeeRoutes)

app.listen(port, ()=> {
    console.log("server started")
})

