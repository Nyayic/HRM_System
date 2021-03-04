/*const express = require('express');
const bodyParser = require('body-parser')
const path = require('path') */
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

//schema db definition
const registerSchema = new mongoose.Schema({
    user_email: String,
    password: {
        type: String,
        required: 'Please Enter your password'
    },
    password_repeat:{
        type: String,
        required: 'Please repeat your passowrd'
    }
});

registerSchema.add({user_email: {
    type: String, unique:true, 
        required:'Please this email already exists'
    } 
});

//pre-save / pre-hook saves password before saving it to the database  - matching a password
registerSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next() 
    //10  is a salt:
}); //hashing is the process of encrypting

//authenticate
registerSchema.statics.authenticate = async function(user_email, password){
    const user = await this.finOne({user_email})
    if(!user){
        throw new Error('User not found')
    }
    const match = await bcrypt.compare(password, user.password)
    if(match){
        return user;
    }
}

module.exports = mongoose.model("Register", registerSchema)