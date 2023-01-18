const express = require('express');
const router = express.Router()
// const app = express();

router.get('/',(req,res) => {
    console.log('ok')
    // res.send("ok")
    res.render('index', {word : 'wow'})
    // res.setHeader("location",'https://raduldev.github.io/mehtaCars/');
})


module.exports = router 