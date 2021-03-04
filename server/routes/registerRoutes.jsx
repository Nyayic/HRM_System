const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const router = express.Router(); 
const Register = require('../models/userModel/registerModel')

//display register page
//render  your register form   -- a get method first, shows the page 
router.get('/light/register', (req, res) => {
    res.render('register')
});

//saving to database
router.post("/", (req, res) => {  
    const register = new Register(req.body);
    register.save()
    .then(item => { 
        Register.find().then(
            items =>{          // item is a variable
                res.render('dashboard', {users:items});  
            })
       })
      .catch(err => {
        res.status(500).send("Unable to save to database");
      });
})

module.exports = router;