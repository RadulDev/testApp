const express = require('express');
// const routes = require('./routes');
const mongoose = require('mongoose');
const userSchema = require('./schema/userSchema');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/testApp',{useNewUrlParser : true, useUnifiedTopology: true}, (err) => {
    if(!err){
        console.log('database connected.')
    }else{
        console.log(err)
    }
})

// run()
async function run(){
    const user = await userSchema.create({fname:'Tweeny',lname:'Zodd', age:17})
    console.log(user)
}

app.set("view engine","ejs");

app.get("/", (req,res) =>{
    console.log("good")
    res.render("index",{word : 'world.'})
    res.json()
})
// app.get

const userRouter = require('./routes/page1');

app.use('/mehtacars', userRouter)

app.listen(3000, () => {
    console.log("connection established in port 3000")
})