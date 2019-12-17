const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const app =  express()
const cors = require('cors')
const PORT = process.env.PORT || 4000

// DB config

const db = require('./configs/keys').url

// Connect to mongoDB

mongoose.connect(db, { useNewUrlParser:true, useUnifiedTopology: true })
.then(()=> console.log('MongoDB connected...'))
.catch(err=>console.log(err))

// Bodyparser 

app.use(express.urlencoded({ extended:false }))
app.use(bodyparser.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("server is up and running")
})


app.use("/api", require('./routes'))




app.listen(PORT, console.log('Server is listening at port '+PORT))